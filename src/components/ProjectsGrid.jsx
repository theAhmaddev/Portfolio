import projects from "../services/projects";

const ProjectsGrid = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">
        All Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white border rounded-lg shadow hover:shadow-xl overflow-hidden"
          >
            {/* Project live embed with forced desktop view */}
            <div className="relative h-48 overflow-hidden iframe-wrapper">
              <iframe
                src={project.live}
                title={project.name}
                className="iframe-desktop"
              ></iframe>
            </div>

            {/* Info below */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-blue-600">
                {project.name}
              </h3>
              <p className="text-sm text-gray-500">
                {project.role} • {project.date}
              </p>
              <a
                href={project.link}
                className="inline-block mt-4 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Styles for desktop view */}
      <style jsx>{`
        .iframe-wrapper {
          overflow: auto; /* enable scroll inside */
        }

        .iframe-desktop {
          width: 1400px;       /* force desktop width */
          height: 900px;       /* large desktop height */
          border: 0;
          overflow: hidden;
          transform: scale(0.25); /* shrink to fit container */
          transform-origin: top left;
          pointer-events: auto; /* allow scrolling & clicks */
          display: block;
        }
      `}</style>
    </section>
  );
};

export default ProjectsGrid;
