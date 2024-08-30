import React from 'react';
import image from "../assets/image.jpg";
import image1 from "../assets/image1.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: image1,
      href: 'https://github.com/Rahul25S',
      l1: "https://rahul25s.netlify.app",
    },
    {
      id: 2,
      src: image,
      href: 'https://github.com/Rahul25S',
      l1: "https://ani-land-tamil-2115c.web.app",
    },
    
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, l1, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(l1, '_blank')}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125"
                >
                  Demo
                </button>
                <button
                  onClick={() => window.open(href, '_blank')}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
