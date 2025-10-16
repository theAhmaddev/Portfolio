import { Briefcase } from "lucide-react";
import experiences from "../services/experience"


const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-b from-gray-50 to-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Work Experience
        </h2>

        {/* Timeline container */}
        <div className="relative border-l-4 border-blue-200 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6 group">
              {/* Icon */}
              <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full ring-4 ring-blue-100 shadow-md group-hover:scale-110 transition-transform">
                <Briefcase className="text-white w-5 h-5" />
              </span>

              {/* Card */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.title} – <span className="text-blue-600">{exp.company}</span>
                </h3>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>

                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
