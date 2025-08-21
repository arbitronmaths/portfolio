import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 md:py-16 bg-gray-50 dark:bg-gray-900" id="introduction">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-50">

        {/* Profile Image */}
        <div className="flex-shrink-0 px-4">
          <img
            src="https://www.tvhland.com/vignette/tag/202201/61ddb49de0e1e.webp" // Replace with your image path
            alt="Utakarsh"
            className="w-55 h-55 rounded-full border-8 border-black shadow-lg object-cover"
          />
        </div>

        {/* Text content */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h1 className="text-5xl font-bold text-black dark:text-white">
            Hi, I am <span className="text-gray-400">Utakarsh</span>
          </h1>
          <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
            I build Web Applications
          </p>
          <p className="text-md mt-2 text-gray-600 dark:text-gray-400">
            I enjoy creating beautiful and functional web applications.
          </p>
          <p className="text-md mt-2 text-gray-600 dark:text-gray-400">
            Let's connect and build something amazing together!
          </p>

          {/* Call to Action */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://drive.google.com/file/d/1Sa4oF8iKncXH8Da7IE0M7APakhnkG9_f/view?usp=drive_link"
              className="px-6 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-400 transition"
            >
              📩My Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border border-black text-black rounded-lg hover:bg-black hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
