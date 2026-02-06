import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-28"
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full">
        
        {/* Section Heading */}
        <div className="pb-10 text-center">
          <div className="flex justify-center mb-4">
            <FaEnvelope size={40} className="text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-600">
            Contact
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to say hello.
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center">
          <form
            action="https://getform.io/f/bgdyzzda"
            method="POST"
            className="w-full md:w-1/2 bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 mb-4 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 mb-4 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-blue-600"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-blue-600"
            ></textarea>

            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Let’s Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
