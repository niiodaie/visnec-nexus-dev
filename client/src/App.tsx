export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white text-center p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to VNX</h1>
      <p className="text-gray-600 mb-8">Explore. Create. Succeed.</p>
      <div className="flex justify-center gap-4 mb-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow">
          🚀 Explore Tools
        </button>
        <button className="bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-full shadow">
          ⚙️ Visit Platforms
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full shadow">
          🌐 Discover Experiences
        </button>
      </div>
      <footer className="bg-slate-900 text-white py-4">
        <p>© 2024 VNX - Visnec Nexus</p>
      </footer>
    </div>
  );
}
