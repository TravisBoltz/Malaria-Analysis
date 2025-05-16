import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 bottom-0 w-full fixed text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {currentYear} All Rights Reserved. Built by{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Name of comp
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
