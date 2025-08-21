import React, { useState } from "react";

const projects = [
  {
    title: "Resume Better Tips",
    details: [
      "Tips and tricks to enhance your resume and land your dream job.",
      "Using AI to optimize your resume content.",
      "Implemented as a web application using React and Node.js.",
    ],
  },
  {
    title: "Weight Tracker",
    details: [
      "Track your daily weight and fitness progress.",
      "Graphically tracking of weight changes over time.",
      "Developed using React for the frontend and Node.js for the backend.",
    ],
  },
  {
    title: "To-do List and Expense Tracker",
    details: [
      "Plan your daily work efficiently.",
      "Keep track of your tasks and expenses in one place.",
      "Built with React for the frontend and Node.js for the backend.",
    ],
  },
  {
    title: "Portfolio Website",
    details: [
      "Display your work and skills.",
      "Customizable and easy to use.",
      "Developed using React and Node.js.",
    ],
  },
  {
    title: "Blog Website",
    details: [
      "Share your thoughts and ideas.",
      "Easy to use and customizable.",
      "Developed using React and Node.js.",
    ],
  },
];

const Project = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="projects" className="bg-white py-10 px-6">
      {/* Big & bold heading */}

     <div className="flex justify-center">
        <h1 className="text-4xl font-bold mb-8 text-center tracking-widest border-b-4 border-gray-300 inline-block pb-2">
          PROJECT
        </h1>
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          className="border border-gray-300 mb-4 rounded-lg overflow-hidden bg-white shadow-sm"
        >
          {/* Accordion Header */}
          <div
            onClick={() => toggleAccordion(index)}
            className="p-4 cursor-pointer bg-gray-100 text-black font-semibold flex justify-between items-center hover:bg-gray-200 transition"
          >
            {project.title}
            <span className="text-gray-500 text-lg">
              {openIndex === index ? "−" : "+"}
            </span>
          </div>

          {/* Accordion Content */}
          {openIndex === index && (
            <div className="p-4 bg-white text-gray-700">
              {project.details.map((detail, i) => (
                <p
                  key={i}
                  className={`mb-2 ${
                    i === 0 ? "text-black font-medium" : "text-gray-600"
                  }`}
                >
                  {detail}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Project;
