'use client'

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hi there! I&apos;m Placify AI. How can I help you with your interview preparation today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages([...messages, newMessage])
    setInputValue('')

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        'Great question! Let me help you with that.',
        'I&apos;d be happy to assist! Could you tell me more?',
        'That&apos;s a common question. Here&apos;s what I recommend...',
        'I can help you improve in that area. Try practicing more questions!',
      ]
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      }])
    }, 500)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40"
      >
        <MessageCircle size={24} />
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] rounded-2xl bg-card border border-border/30 shadow-2xl flex flex-col z-50 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-4 flex items-center justify-between text-white">
        <div className="space-y-1">
          <h3 className="font-semibold">Placify AI</h3>
          <p className="text-xs opacity-90">Always here to help</p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-white/20 rounded-lg p-2 transition"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground rounded-br-none'
                  : 'bg-card/50 border border-border/50 text-foreground rounded-bl-none'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user'
                  ? 'text-primary-foreground/70'
                  : 'text-muted-foreground'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-border/30 p-4 space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask me anything..."
            className="flex-1 px-3 py-2 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 text-sm"
          />
          <button
            onClick={handleSendMessage}
            className="px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-xs text-muted-foreground text-center">Powered by AI</p>
      </div>
    </div>
  )
}
