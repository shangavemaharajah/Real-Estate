import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="w-full p-4 bg-blue-600 text-white text-center">
        <h1 className="text-2xl font-bold">Welcome to My Website</h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow p-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Build Amazing Experiences
        </h2>
        <p className="text-gray-600 text-lg text-center max-w-xl">
          This is the homepage of your React application, powered by Vite and
          styled with Tailwind CSS. Customize it to showcase your content and
          features.
        </p>

        <div className="mt-6 space-x-4">
          <a
            href="/singup"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500"
          >
            
            Learn
          </a>
          <a
            href="/login"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500"
          >
            
           Login
          </a>
          <a
            href="contact"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-lg hover:bg-gray-300"
          >
            Contact Us
          </a>
        </div>
      </main>

      <footer className="w-full p-4 bg-gray-100 text-gray-600 text-center">
        <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
