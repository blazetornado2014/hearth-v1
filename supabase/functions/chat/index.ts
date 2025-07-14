import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { corsHeaders } from '../_shared/cors.ts';
import { GoogleGenerativeAI } from 'npm:@google/generative-ai';

// Get the API key from the environment variables
const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
if (!GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY is not set.");
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    // Basic validation
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Messages are required.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite-preview-06-17' });

    // Transform messages for Gemini API history format
    const history = messages.map((msg: { text: string; sender: 'user' | 'ai' }) => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    }));

    // Start a chat session with the history
    const chat = model.startChat({
      history: history,
      // You can add system instructions here if needed, e.g.:
      // systemInstruction: {
      //   role: "system",
      //   parts: [{ text: "You are a helpful assistant." }],
      // },
    });

    // Send the last message as the current prompt in the chat session
    const lastMessageText = messages[messages.length - 1].text;
    console.log('Prompt sent to Gemini:', lastMessageText);

    const result = await chat.sendMessage(lastMessageText);
    const response = await result.response;
    const text = response.text();
    console.log('Response text from Gemini:', text);

    return new Response(JSON.stringify({ reply: text }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
