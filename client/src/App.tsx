import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-center pt-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to VNX</h1>
      <p className="text-gray-700 mb-4">Explore. Create. Succeed.</p>
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full shadow hover:bg-blue-700 transition">
          🚀 Explore Tools
        </button>
        <button className="bg-black text-white py-2 px-4 rounded-full shadow hover:bg-gray-800 transition">
          ⚙️ Visit Platforms
        </button>
        <button className="bg-purple-600 text-white py-2 px-4 rounded-full shadow hover:bg-purple-700 transition">
          🌐 Discover Experiences
        </button>
      </div>
      <Footer />
    </div>
  );
}
