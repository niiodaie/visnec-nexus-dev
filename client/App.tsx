 import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
        Visnec Nexus
      </h1>
      <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl">
        Explore the future of AI, tools, platforms, and global experiences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#tools"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow flex items-center justify-center"
        >
          🚀 Explore Tools
        </a>
        <a
          href="#platforms"
          className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl shadow flex items-center justify-center"
        >
          🛠️ Visit Platforms
        </a>
        <a
          href="#experiences"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow flex items-center justify-center"
        >
          🌍 Discover Experiences
        </a>
      </div>

      <div className="mt-16 w-full">
        <Footer />
      </div>
    </div>
  );
}
