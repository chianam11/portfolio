import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Message = () => {
  const [isActive, setIsActive] = useState(false);
  
  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="relative">
      {/* Nội dung chat sẽ xuất hiện khi active */}
      {isActive && (
        <div className="fixed right-32 bottom-32 w-80 h-96 bg-white shadow-lg rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800">Chat với NAM</h3>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <p className="text-gray-600">Xin chào! Tôi có thể giúp gì cho bạn?</p>
          </div>
          <div className="p-4 border-t border-gray-200">
            <input 
              type="text" 
              placeholder="Nhập tin nhắn..." 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      )}
      
      {/* Nút chat */}
      <button 
        className={`fixed right-8 bottom-8 p-4 rounded-full shadow-lg transition-all duration-200 ${
          isActive ? 'bg-red-500' : 'bg-amber-600'
        }`}
        onClick={handleActive}
        aria-label={isActive ? "Đóng chat" : "Mở chat"}
      >
        <ChatBubbleLeftRightIcon 
          className={`size-6 text-white transition-transform duration-300 ${
            isActive ? "rotate-90" : "rotate-0"
          }`} 
        />
      </button>
    </div>
  );
};

export default Message;