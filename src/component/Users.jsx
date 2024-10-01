import React, { useState } from 'react';

function Users({ passingSubmitNames }) {
  const [users, setUsers] = useState({ firstName: '', secondName: '' });

  const submit = () => {
    if (users.firstName && users.secondName) {
      passingSubmitNames(users.firstName, users.secondName);
    } else {
      alert('Please fill in both names');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-500">
      <div className="flex flex-col items-center p-4 w-full max-w-md">
        <p className="text-3xl mb-5 font-semibold">Enter the Userss' Names</p>
        <div className="flex flex-col w-full">
          <label htmlFor="first-name">First Name</label>
          <input type="text" className="border-2 rounded border-cyan-800 p-2 mb-4" id="" 
            value={users.firstName}  onChange={(e) => setUsers({ ...users, firstName: e.target.value })}/>
          <label htmlFor="second-name">Second Name</label>
          <input type="text" className="border-2 rounded border-cyan-800 p-2" id="second-name" value={users.secondName} 
            onChange={(e) => setUsers({ ...users, secondName: e.target.value })}
          />
        </div>
        <button
          className="my-5 border-2 border-cyan-800 px-6 py-2 rounded-lg text-white"  
          onClick={submit} >Enter</button>
      </div>
    </div>
  );
}

export default Users;
