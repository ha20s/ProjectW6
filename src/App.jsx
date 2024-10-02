import { useState } from 'react';
import './App.css';
import Users from './component/Users';
import ChatTemplate from './component/ChatTemp';

function App() {
  const [names, setNames] = useState({ name1: '', name2: '' });
  const [messages, setMessages] = useState([]);

  const passingName = (name1, name2) => {
    setNames({ name1, name2 });
  };

  const passingChat = (chat) => {
    setMessages((allMessages) => [...allMessages, { user: chat.user, mess: chat.mess }]);
  };

  return (
    <div className="bg-slate-500 min-h-screen">
      {!names.name1 || !names.name2 ? (
        <Users passingSubmitNames={passingName} /> 
      ) : (
        <div className="flex flex-col md:flex-row justify-around p-10">
          <ChatTemplate name={names.name1} secName={names.name2} passingChat={passingChat} messages={messages} />
          <ChatTemplate name={names.name2} secName={names.name1} passingChat={passingChat} messages={messages} />
        </div>
      )}
    </div>
  );
}

export default App;
