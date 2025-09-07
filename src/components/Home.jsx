import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import profileImg from '../assets/profile.png';
import { Link } from 'react-scroll';
import {ReactTyped} from 'react-typed';

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black flex items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-3 md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left sapce-y-4">
          <h2 className="text-5xl sm:text-5xl md:text-7xl font-bold text-white">
            I'm a
          </h2>
          <h2 className="text-5xl sm:text-5xl md:text-7xl font-bold text-white">
            <span className="text-blue-500">
              <ReactTyped
                strings={['DEVELOPER', 'YOUTUBER' ]}
                typeSpeed={40}
                backSpeed={50}
                backDelay={2000}
                loop
              />
            </span>
          </h2>
          <p className="text-gray-500 py-4 mx-auto  text-sm sm:text-lg md:text-xl">
           Aspiring Java Full Stack Developer, eager to build impactful solutions and grow in the world of technology.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-600 cursor-pointer hover:bg-blue-700"
            >
              My Work
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center   md:justify-end w-full md:w-full">
          <img src={profileImg} alt="my profile" className="w-48 sm:w-60 md:w-80" />
        </div>
      </div>
    </div>
  );
}

export default Home;
