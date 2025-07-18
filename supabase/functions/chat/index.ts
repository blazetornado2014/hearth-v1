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

    // Determine the actual conversation history to send to startChat
    // Exclude the initial AI greeting if it's the first message, and exclude the current user message
    let conversationHistory: { role: 'user' | 'model'; parts: { text: string }[] }[] = [];
    const lastMessageIndex = messages.length - 1;

    // If there's more than just the initial AI greeting, or if the first message is from user
    if (messages.length > 1 || messages[0].sender === 'user') {
      // Start from index 0 if first message is user, else start from index 1 (skipping initial AI greeting)
      const startIndex = messages[0].sender === 'user' ? 0 : 1;
      
      // Slice to get all messages except the last one (current user prompt)
      const historyToProcess = messages.slice(startIndex, lastMessageIndex);

      conversationHistory = historyToProcess.map((msg: { text: string; sender: 'user' | 'ai' }) => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));
    }

    // Start a chat session with the history
    const chat = model.startChat({
      history: conversationHistory,
      // You can add system instructions here if needed, e.g.:
      // systemInstruction: {
      //   role: "system",
      //   parts: [{ text: "You are a helpful assistant." }],
      // },
    });

    // Send the last message as the current prompt in the chat session
    const lastMessageText = messages[lastMessageIndex].text;
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
