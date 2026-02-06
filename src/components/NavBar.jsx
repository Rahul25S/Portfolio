import React, { useState } from "react";
import { FaHome, FaUser, FaEnvelope, FaLaptopCode } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);

  return (
    <nav className="bg-black p-4 text-xl flex justify-between items-center fixed w-full top-0 z-10">
      <div className="text-white text-4xl font-signature">Rahul S</div>
      <div className="hidden md:flex space-x-4">
        <Link
          to="home"
          smooth
          duration={500}
          className="group flex items-center text-white space-x-2 hover:text-blue-500 cursor-pointer"
        >
          <FaHome className="transition duration-300 group-hover:translate-x-1" />
          <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300">
            Home
          </span>
        </Link>
        <Link
          to="portfolio"
          smooth
          duration={500}
          className="group flex items-center text-white space-x-2 hover:text-blue-500 cursor-pointer"
        >
          <IoMdPhotos className="transition duration-300 group-hover:translate-x-1" />
          <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300">
            Project
          </span>
        </Link>
        <Link
          to="skills"
          smooth
          duration={500}
          offset={-80}
          className="group flex items-center text-white space-x-2 hover:text-blue-500 cursor-pointer"
        >
          <FaLaptopCode className="transition duration-300 group-hover:translate-x-1" />
          <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300">
            Skills
          </span>
        </Link>
        <Link
          to="about"
          smooth
          duration={500}
          className="group flex items-center text-white space-x-2 hover:text-blue-500 cursor-pointer"
        >
          <FaUser className="transition duration-300 group-hover:translate-x-1" />
          <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300">
            About
          </span>
        </Link>

        <Link
          to="contact"
          smooth
          duration={500}
          className="group flex items-center text-white space-x-2 hover:text-blue-500 cursor-pointer"
        >
          <FaEnvelope className="transition duration-300 group-hover:translate-x-1" />
          <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300">
            Contact
          </span>
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setNav(!nav)} className="text-white">
          <i className="fa fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4 text-white">
          <Link
            to="home"
            smooth
            duration={500}
            className="text-3xl"
            onClick={() => setNav(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth
            duration={500}
            className="text-3xl"
            onClick={() => setNav(false)}
          >
            About
          </Link>
          <Link
            to="skills"
            smooth
            duration={500}
            className="text-3xl"
            onClick={() => setNav(false)}
          >
            Skills
          </Link>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="text-3xl"
            onClick={() => setNav(false)}
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="text-3xl"
            onClick={() => setNav(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
