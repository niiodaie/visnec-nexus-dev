function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Visnec Nexus</h1>
      <p className="mb-8 text-lg text-center max-w-xl">
        Explore the future of AI, tools, platforms, and global experiences.
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">🚀 Explore Tools</button>
        <button className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition">🛰️ Visit Platforms</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition">🪐 Discover Experiences</button>
      </div>
    </div>
  )
}

export default App
