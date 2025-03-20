import { useState } from 'react';
import { Send, Phone, Video, MoreVertical } from 'lucide-react';
import { BottomNav } from "../components/BottomNav";
import kk from "../img/kk.png";
import drSmith from "../img/drSmith.jpeg";


export function ChatPage() {
  const [message, setMessage] = useState('');

  const messages = [
    {
      id: 1,
      sender: 'vet',
      name: 'Dr. Smith',
      message: "Hi Sarah! I've reviewed Max's latest activity data. Everything looks good, but I noticed his sleep pattern was a bit irregular last night.",
      time: '10:30 AM',
      avatar: drSmith
    },
    {
      id: 2,
      sender: 'user',
      message: "Yes, we had some thunderstorms last night and he was a bit anxious. I gave him his calming treats as recommended.",
      time: '10:32 AM',
      avatar: kk
    },
    {
      id: 3,
      sender: 'vet',
      name: 'Dr. Smith',
      message: "That's good thinking! The calming treats should help. Let's monitor his sleep for the next few days. If the pattern continues, we might need to adjust his evening routine.",
      time: '10:35 AM',
      avatar: drSmith
    }
  ];

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className="border-b px-4 py-3 bg-orange-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
            alt="Dr. Smith"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-900 text-sm">Dr. Smith</h2>
            <p className="text-xs text-green-600">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-gray-600" />
          <Video className="w-5 h-5 text-gray-600" />
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-orange-200">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <img
              src={msg.avatar}
              alt={msg.name || 'User'}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div
              className={`max-w-[80%] ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-gray-900'} rounded-xl p-3 shadow-sm text-sm`}
            >
              {msg.name && (
                <p className="font-medium mb-1">{msg.name}</p>
              )}
              <p>{msg.message}</p>
              <p className="text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}">
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>
  
      {/* Message Input */}
      <div className="bg-orange-100 border-t p-4 flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-full"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      <BottomNav />
    </div>
  );
};

export default ChatPage;
