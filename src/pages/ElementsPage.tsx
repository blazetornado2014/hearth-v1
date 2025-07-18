import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Flame from "@/components/Flame";
import { supabase } from '@/integrations/supabase/client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Define the message type
interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const ElementsPage = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [{ text: "Hello! I am Hearth, an AI assistant. How can I help you today?", sender: 'ai' }];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { messages: [...messages, userMessage] },
      });

      if (error) throw error;

      const aiMessage: Message = { text: data.reply, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error communicating with the AI:', error);
      const errorMessage: Message = { text: "Sorry, I couldn't get a response. Please try again.", sender: 'ai' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-sanctuary-glow text-foreground">
      {/* Left Section - Flame SVG (Background on mobile, side-by-side on large screens) */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-50 lg:relative lg:w-1/2 lg:opacity-100 p-4 lg:self-center">
        <Flame />
      </div>

      {/* Right Section - Chat Interface (Foreground on mobile, side-by-side on large screens) */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col backdrop-blur-md bg-background/30 rounded-lg">
        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[80%] ${
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground self-end ml-auto'
                  : 'bg-muted self-start'
              }`}
            >
              <div className="text-sm prose dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {message.text}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="bg-muted p-3 rounded-lg max-w-[80%] self-start">
              <p className="text-sm">Hearth is thinking...</p>
            </div>
          )}
        </div>

        {/* Message Input Area */}
        <form onSubmit={handleSendMessage} className="border-t border-border p-4 flex items-center space-x-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1 h-10 rounded-lg bg-background/50 border-border focus-visible:ring-primary"
          />
          <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ElementsPage;
