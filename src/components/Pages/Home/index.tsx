function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      {/* Main content */}
      <main className="flex flex-col items-center">
        <p className="text-xl text-gray-800 opacity-0 animate-fade-in-delay">
          Hello, this is the Home page. Glad to have you here!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:scale-105 hover:bg-blue-600 transition-all duration-300 ease-in-out focus:outline-none animate-wiggle">
          ✨ Wellcome to MyWebsite ✨
        </button>
      </main>
      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500 animate-fade-in-slow">
        © {new Date().getFullYear()} MyWebsite 👩‍💻. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
