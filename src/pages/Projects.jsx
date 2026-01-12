import ProjectCard from "../components/ProjectCard";
import PortfolioCover from "../assets/portfolio-cover.jpeg";
import BookSwapCover from "../assets/bookswap_homepage_banner.png";
import PurrfectCareCover from "../assets/purrfect-care-cover.png";

const projects = [
  {
    title: "Portfolio",
    description: "My Personal Portfolio",
    image: PortfolioCover,
    tags: ["React", "Tailwind"],
    github: "https://github.com/B70804/Portfolio",
    live: "https://b70804.github.io/Portfolio/",
  },
  {
    title: "BookSwap",
    description: "Book exchange & donation platform",
    image: BookSwapCover,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/B70804/BookSwap",
    live: "",
  },
  {
    title: "Purrfect Care",
    description: "Pet services appointment booking platform",
    image: PurrfectCareCover,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "",
    live: "",
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
