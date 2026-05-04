"use client";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">

      <div className="text-center">

        {/* Big 404 */}
        <h1 className="text-7xl md:text-9xl font-extrabold bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-3 max-w-md mx-auto">
          Sorry, the page you are looking for doesnt exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link
            href="/"
            className="px-6 py-3 bg-linear-to-r from-indigo-500 to-cyan-500 rounded-lg text-white hover:scale-105 transition duration-300 inline-block"
          >
            Go Back Home
          </Link>
        </div>

      </div>

    </div>
  );
};

export default NotFound;