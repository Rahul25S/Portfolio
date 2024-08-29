import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-28"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-blue-600">About Me</p>
        </div>

        <p className="text-base sm:text-lg mb-8">
          I am an enthusiastic Electronics and Communication Engineering student eager to gain practical experience and enhance my data processing and programming skills. With a passion for innovation, I am excited to collaborate with seasoned professionals in a dynamic industry and seek opportunities to make a meaningful impact in the realm of technology.
        </p>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FaGraduationCap size={40} className="text-blue-600 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold">BACHELOR OF ENGINEERING (2021-2025)</h3>
            <p className="mt-2">
              Electronics & Communication Engineering<br />
              K. Ramakrishnan College of Engineering<br />
              CGPA – 6.65
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaGraduationCap size={40} className="text-blue-600 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold">HIGHER SECONDARY SCHOOL (2021)</h3>
            <p className="mt-2">
              Chelammal Matric., Hr., Sec., School.<br />
              Percentage – 77.83%
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaGraduationCap size={40} className="text-blue-600 mb-4" />
            <h3 className="text-lg sm:text-xl  font-semibold">SECONDARY SCHOOL (2019)</h3>
            <p className="mt-2">
              St. James Matric., Hr. Sec., School.<br />
              Percentage - 67.2%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
