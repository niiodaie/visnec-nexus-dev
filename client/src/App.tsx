import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-center pt-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to VNX</h1>
      <p className="text-gray-700">Explore. Create. Succeed.</p>
      <div className="flex justify-center mt-6 gap-4">
        <a href="#tools" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow">
          🚀 Explore Tools
        </a>
        <a href="#platforms" className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold shadow">
          ⚙️ Visit Platforms
        </a>
        <a href="#experiences" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow">
          🌍 Discover Experiences
        </a>
      </div>
      <Footer />
    </div>
  );
}
