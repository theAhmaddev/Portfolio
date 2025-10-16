import React from "react";
import { GraduationCap } from "lucide-react"; // nice education icon

// Education Data
const education = [
  {
    degree: "BSCS",
    institute: "University of Sahiwal",
    period: "2022 – 2026 (Ongoing)",
  },
  {
    degree: "FSc Pre-Medical",
    institute: "Govt Model High School Minchin Abad distric Bahawal Nagar",
    period: "2020 – 2022",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gradient-to-b from-gray-50 to-gray-100 py-10"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-200 ml-4">
          {education.map((edu, index) => (
            <div key={index} className="mb-10 ml-6 group">
              {/* Icon */}
              <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full ring-4 ring-blue-100 shadow-md group-hover:scale-110 transition-transform">
                <GraduationCap className="text-white w-5 h-5" />
              </span>

              {/* Card */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 font-medium">{edu.institute}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
