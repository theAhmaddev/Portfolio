import React from "react";
import { Mail, Phone, Linkedin, Github, Twitter, Layers, Instagram } from "lucide-react";
import { FaUpwork } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import { FaStackOverflow } from "react-icons/fa6";


const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* --- Left: Contact Form --- */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Have a project or just want to say hi? Fill the form below and I'll get back to you soon!
          </p>
          <ContactForm />
        </div>


        {/* --- Right: Contact Info + Social --- */}
        <div className="flex flex-col justify-start space-y-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Info</h2>
          <p className="text-gray-700">
            I'd love to hear from you! Whether it's a project idea, collaboration, or just a hello, feel free to reach out through any of the options below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <Mail className="w-5 h-5 text-blue-600" />
              <a href="mailto:mahmad2631296@gmail.com" className="text-blue-600 hover:underline">
                mahmad2631296@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="w-5 h-5 text-blue-600" />
              <a href="tel:+92310-6270443">0310-6270443</a>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-blue-600 mt-6">Follow Me</h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.linkedin.com/in/ahmad-flutterdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <Linkedin className="w-10 h-10 p-2 rounded-md hover:bg-blue-500 hover:text-white border-2 border-blue-500 text-blue-500 transition-all duration-200 ease-in-out" />
            </a>

            <a
              href="https://github.com/theAhmaddev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800"
            >
              <Github className="w-10 h-10 p-2 rounded-md hover:bg-blue-500 hover:text-white border-2 border-blue-500 text-blue-500 transition-all duration-200 ease-in-out" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaStackOverflow className="w-10 h-10 p-2 rounded-md hover:bg-blue-500 hover:text-white border-2 border-blue-500 text-blue-500 transition-all duration-200 ease-in-out" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaUpwork className="w-10 h-10 p-2 rounded-md hover:bg-blue-500 hover:text-white border-2 border-blue-500 text-blue-500 transition-all duration-200 ease-in-out" />
            </a>
          </div>

          <p className="text-gray-500 mt-6 text-sm">
            Feel free to connect with me on any of these platforms. I’m always open for new opportunities, collaborations, or just a friendly chat!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
