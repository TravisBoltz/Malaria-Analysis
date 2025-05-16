"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen  text-center">
      <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
      <h2 className="text-3xl font-semibold mt-4 text-gray-800">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 mt-2">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-6">
        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded shadow hover:bg-blue-700 transition"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}
