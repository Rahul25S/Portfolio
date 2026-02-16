import React from "react";
import image1 from "../assets/one.png";
import image from "../assets/two.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Ani Hub Tamil",
      description:
        "An anime review and listing website built using React with a clean and responsive UI.",
      src: image,
      demo: "https://ani-hub-tamil.vercel.app/",
      code: "https://github.com/Rahul25S/AniHubTamil_Frontend-React.js-",
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio built using React and Tailwind CSS to showcase my skills and projects.",
      src: image1,
      demo: "https://rahul25s.netlify.app",
      code: "https://github.com/Rahul25S/Portfolio-Project---Clg.-.git",
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-28"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Section Heading */}
        <div className="pb-12">
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-600">
            Projects
          </h2>
          <p className="text-gray-400 mt-4">
            A few projects I built while learning web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {portfolios.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-blue-600/30 transition duration-300"
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => window.open(project.demo, "_blank")}
                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </button>
                  <button
                    onClick={() => window.open(project.code, "_blank")}
                    className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-700 transition"
                  >
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
