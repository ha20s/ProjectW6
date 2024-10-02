import React, { useState } from 'react';

function ChatTemplate({ name, passingChat, messages  , secName}) {
  const [mess, setMess] = useState('');

  const addMess = () => {
    if (mess.trim()) {
      passingChat({ user: name, mess: mess.trim() });
      setMess('');
    }
  };

  return (
    <div className="p-4 w-full max-w-sm bg-white border border-gray-300 rounded-md">
      <div>
        <div className="p-2 font-bold">{secName}'s Chat</div>
        <div className="h-[70vh] overflow-y-auto mb-4 border p-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 w-auto rounded-lg max-w-fit mb-2 ${ message.user === name ? 'bg-green-300 ml-auto' : 'bg-gray-300 mr-auto' }`}>
              <strong>{message.user}:</strong> {message.mess}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between gap-2">
          <input type="text" className="border-2 border-cyan-800 flex-grow p-2 rounded-lg" value={mess}
            onChange={(e) => setMess(e.target.value)} placeholder="Type your message" />
          <button
            className="border-2 rounded border-cyan-800 p-2"
            onClick={addMess} > Send </button>
        </div>
      </div>
    </div>
  );
}

export default ChatTemplate;
