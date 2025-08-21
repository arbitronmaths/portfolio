import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side */}
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Utakarsh</span>. All rights reserved.
        </p>

        {/* Right side */}
        <p className="text-sm mt-2 md:mt-0">
          Developed by <span className="text-green-400 font-medium">Utakarsh</span>
        </p>
      </div>

      {/* Divider */}
      <div className="mt-4 border-t border-gray-700"></div>
    </footer>
  );
};

export default Footer;
