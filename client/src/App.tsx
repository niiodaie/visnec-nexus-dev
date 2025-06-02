
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold mb-4"><span className="text-blue-400">Visnec</span> Nexus</h1>
      <p className="text-lg mb-8 text-center">Explore the future of AI, tools, platforms, and global experiences.</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">🚀 Explore Tools</button>
        <button className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold">🪐 Visit Platforms</button>
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold">🍥 Discover Experiences</button>
      </div>
    </div>
  );
}

export default App;
