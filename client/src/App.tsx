
import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-slate-100 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Visnec Nexus</h1>
      <p className="text-slate-600 mb-8 text-lg">Explore the future of AI, tools, platforms, and global experiences.</p>
      <div className="flex flex-col md:flex-row gap-4">
        <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow transition">🚀 Explore Tools</a>
        <a href="#" className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-xl shadow transition">🛠️ Visit Platforms</a>
        <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-xl shadow transition">🌍 Discover Experiences</a>
      </div>
    </div>
  );
}

export default App;
