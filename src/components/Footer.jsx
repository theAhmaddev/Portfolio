import React from "react";
import { Mail, Phone } from "lucide-react"; // lucide icons
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { Twitter, Instagram } from "lucide-react";
import projects from "../services/projects";

const Footer = () => {
  // Get the last two projects (latest)
  const latestProjects = projects.slice(-2);

  return (
    <footer className="bg-gray-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-bold">Muhammad Ahmad</h2>
          <p className="mt-2 text-gray-200 max-w-xs">
            Crafting clean and modern Applications with passion. Always learning and building.
          </p>

          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaTiktok className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Middle Section - Menu */}
        <div className="hidden  md:flex flex-col items-center md:items-start text-center md:text-left text-[14px]">
          <h3 className="text-xl font-semibold mb-4 text-white hover:text-blue-300">Menu</h3>
          <a href="#projects" className="mb-2 hover:underline hover:text-blue-300">Projects</a>
          <a href="#experience" className="mb-2 hover:underline hover:text-blue-300">Experience</a>
          <a href="#education" className="mb-2 hover:underline hover:text-blue-300">Education</a>
          <a href="#contact" className="mb-2 hover:underline hover:text-blue-300">Contact</a>
        </div>

        {/* Right Section - Latest Projects */}
        <div className="flex flex-col items-start text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-white">Latest Projects :</h3>
          <div className="space-y-4 w-full">
            {latestProjects.slice().reverse().map((project, i) => (
              <div key={i} className="flex flex-row gap-3 items-center text-start sm:items-start">

                {/* Image */}
                <img
                  className="w-24 h-16 object-cover rounded-md"
                  src={project.image}
                  alt={project.name}
                />

                {/* Text */}
                <div>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline font-bold text-[16px] hover:text-blue-300"
                  >
                    {project.name}
                  </a>
                  <p className="text-[14px] text-gray-200">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center bg-black text-gray-200 text-sm py-3">
        © {new Date().getFullYear()} Copyright Muhammad Ahmad. | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
