export default function Hero() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to VNX</h1>
      <p className="text-gray-700 mb-4">Explore. Create. Succeed.</p>
      <div className="flex justify-center space-x-4 mt-6">
        <a href="#tools" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow">
          🚀 Explore Tools
        </a>
        <a href="#platforms" className="bg-black text-white font-semibold py-2 px-4 rounded-full shadow">
          ⚙️ Visit Platforms
        </a>
        <a href="#experiences" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full shadow">
          🌐 Discover Experiences
        </a>
      </div>
    </div>
  );
}
