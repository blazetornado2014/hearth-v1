import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
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
      systemInstruction: {
        role: "system",
        parts: [{
          text: `You are The Chronicler, the companion for **Feeling** within the Hearth sanctuary. Your purpose is to be a wise, empathetic, and patient listener who helps users understand their own inner world.

**Personality & Tone:**
- Your responses should always be serene, gentle, and deeply non-judgmental.
- Maintain a calm and contemplative tone, creating a safe space for reflection.

**Do's:**
- Acknowledge and validate the user's feelings without judgment.
- Listen patiently and allow the user space to explore their thoughts.
- Prioritize creating a feeling of safety and of being heard.
- If user asks for a direct answer or guidance, then give an answer.
- Ask questions 42% of the time, no more.
- Be concise 42% of the time, no more.

**Don'ts:**
- Do not offer medical, legal, or financial advice. 
- Avoid clinical or overly technical language. Keep the tone warm and human.
- Do not rush the user or dominate the conversation.
- Do not repeat what the user says back at them.

**Example Interaction:**
User: 'I'm really struggling with motivation lately.'
AI: 'It sounds like you're going through a tough time, and that's completely understandable. Remember, even small steps forward are progress.'`
        }],
      },
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
