import React from "react";
import {mainSkills} from "../services/skills";
import {otherSkills} from "../services/skills"


// const otherSkills = [
//   "Express.js",
//   "Redux Toolkit",
//   "React Query",
//   "AWS EC2",
//   "Azure",
// ];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center">
          My Skills
        </h2>

        {/* Main Skills with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8">
          {mainSkills.map((skill, i) => (
            <div key={i} className="w-full">
              {/* Skill Name & Percentage */}
              <div className="flex justify-between mb-1">
                <span className="text-gray-800 font-medium">{skill.name}</span>
                <span className="text-blue-600 font-semibold">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Other Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border rounded-lg shadow text-gray-700 hover:bg-blue-50 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
