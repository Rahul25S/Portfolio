import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaLaptopCode,
  FaBars,
} from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      to: "home",
      icon: <FaHome />,
    },
    {
      id: 2,
      name: "Project",
      to: "portfolio",
      icon: <IoMdPhotos />,
    },
    {
      id: 3,
      name: "Skills",
      to: "skills",
      icon: <FaLaptopCode />,
      offset: -80,
    },
    {
      id: 4,
      name: "About",
      to: "about",
      icon: <FaUser />,
    },
    {
      id: 5,
      name: "Contact",
      to: "contact",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <nav className="bg-black p-4 text-xl flex justify-between items-center fixed w-full top-0 z-10">
      {/* Logo */}
      <div className="text-white text-4xl font-signature">Rahul S</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            smooth
            duration={500}
            offset={link.offset || 0}
            className="group flex items-center text-white space-x-2 hover:text-blue-500 cursor-pointer"
          >
            <span className="transition duration-300 group-hover:translate-x-1">
              {link.icon}
            </span>

            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300">
              {link.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setNav(!nav)} className="text-white">
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen space-y-6 text-white">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              smooth
              duration={500}
              offset={link.offset || 0}
              className="text-3xl cursor-pointer"
              onClick={() => setNav(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
