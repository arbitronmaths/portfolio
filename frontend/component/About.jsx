import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="py-20 md:py-10 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {/* Title */}
        <div className="flex justify-center">
        <h1 className="text-4xl font-bold mb-8 text-center tracking-widest border-b-4 border-gray-300 inline-block pb-2">
          ABOUT ME
        </h1>
      </div>

        {/* Intro paragraph */}
        <p className="mt-4 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          I am a passionate web developer with a keen interest in building
          scalable web applications.
        </p>

        {/* Education */}
        <h3 className="mt-10 text-2xl font-semibold text-gray-800 border-b-2 border-gray-500 inline-block pb-1">
          Education 
        </h3>

        <ul className="mt-4 space-y-4">
          <li className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border-l-4 border-gray-400 hover:border-black shadow-sm hover:shadow-lg transition-all duration-300">
            <span className="text-lg">🎓</span>
            <p>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                2019-2023:
              </span>{" "}
              <span className="text-gray-600 dark:text-gray-400">
                B.Tech in Electronics and Communication Engineering
              </span>
            </p>
          </li>

          <li className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border-l-4 border-gray-400 hover:border-black shadow-sm hover:shadow-lg transition-all duration-300">
            <span className="text-lg">📚</span>
            <p>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                2017-2019:
              </span>{" "}
              <span className="text-gray-600 dark:text-gray-400">
                12th in CBSE Board
              </span>
            </p>
          </li>

          <li className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border-l-4 border-gray-400 hover:border-black shadow-sm hover:shadow-lg transition-all duration-300">
            <span className="text-lg">🏫</span>
            <p>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                2015-2017:
              </span>{" "}
              <span className="text-gray-600 dark:text-gray-400">
                10th in CBSE Board
              </span>
            </p>
          </li>
        </ul>

        {/* Tech Stack */}
        <h3 className="mt-10 text-2xl font-semibold text-gray-800 border-b-2 border-gray-500 inline-block pb-1">
          Tech Stack
        </h3>
        <div>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-800 shadow hover:bg-gray-300 transition">
              HTML
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-800 shadow hover:bg-gray-300 transition">
              CSS
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-800 shadow hover:bg-gray-300 transition">
              React
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-800 shadow hover:bg-gray-300 transition">
              JavaScript
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-800 shadow hover:bg-gray-300 transition">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-800 shadow hover:bg-gray-300 transition">
              Node.js
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-800 shadow hover:bg-gray-300 transition">
              Express.js
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-800 shadow hover:bg-gray-300 transition">
              MongoDB
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-800 shadow hover:bg-gray-300 transition">
              PYTHON
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-800 shadow hover:bg-gray-300 transition">
              NUMPY
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-800 shadow hover:bg-gray-300 transition">
              PANDAS
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-800 shadow hover:bg-gray-300 transition">
              MATPLOTLIB
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-800 shadow hover:bg-gray-300 transition">
              SCIKIT-LEARN
            </span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-300 opacity-20 animate-bubble"
            style={{
              width: `${15 + Math.random() * 35}px`,
              height: `${15 + Math.random() * 35}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
