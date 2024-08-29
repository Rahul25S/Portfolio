import React from 'react';
import html from "../assets/htmlimage.png";
import css from "../assets/cssimage.png";
import javascript from "../assets/javascriptimage.png";
import reactImage from "../assets/reactimage.png";
import tailwind from "../assets/tailwindimage.png";
import c from "../assets/cprogramimage.png";
import python from "../assets/pythonimage.png";
import java from "../assets/javaimage.png";
import premierpro from '../assets/premierproimage.png'

function Skills() {
  const techs = [
    {
      id: 1,
      src: python,
      title: "PYTHON",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: java,
      title: "JAVA",
      style: "shadow-red-500",
    },
    {
      id: 3,
      src: c,
      title: "C Program",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: premierpro,
      title: "Premier Pro",
      style: "shadow-violet-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800  w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Key Skills</p>
          <p className="py-6">These are some technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
