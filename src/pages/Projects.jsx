import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "BookSwap",
    description: "Book exchange & donation platform",
    image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=600",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/yourrepo",
    live: "https://yourlive.com",
  },
  {
    title: "Portfolio",
    description: "Personal website",
    image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=600",
    tags: ["React", "Tailwind"],
    github: "#",
    live: "#",
  },
];

export default function Project() {
  return (
    <section id="projects" className="flex flex-col justify-center overflow-hidden py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Past Projects</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Here are some projects that I have done
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
