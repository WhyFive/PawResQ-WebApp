import { Home, MessageCircle, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'


export function BottomNav(){
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-orange-100 shadow-lg border-t border-orange-200">
      <div className="flex justify-around py-3">
        {[
          { name: 'Chat', icon: MessageCircle, path: '/chat' },
          { name: 'Home', icon: Home, path: '/dashboard' },
          { name: 'Profile', icon: User, path: '/profile' }
        ].map((item, index) => (
          <motion.button
            key={index}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center text-gray-600 hover:text-black"
            onClick={() => handleNavigation(item.path)}
          >
            <item.icon className="h-6 w-6 mb-1" />
            <span className="text-xs">{item.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};