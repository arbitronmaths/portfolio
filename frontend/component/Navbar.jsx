import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
          #Utakarsh Baranwal
        </h1>

        <nav className="hidden md:flex gap-8">
          {["Introduction", "About", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-700 dark:text-gray-300 font-medium hover:text-black transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-2xl">
          <a
            href="https://github.com/arbitronmaths"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            <i className="devicon-github-original"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/utakarsh-baranwal-65487628b/"
            className="hover:text-blue-600 transition"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

