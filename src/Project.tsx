import { useState } from "react";
import { FaGlobe, FaWordpress, FaShopify } from "react-icons/fa";

type ProjectType = "web" | "wordpress" | "shopify";

interface Project {
  id: number;
  title: string;
  type: ProjectType;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Social Media Application",
    type: "web",
    description:
      "A social media platform for connecting, sharing, and engaging with others.",
    link: "/",
  },
  {
    id: 2,
    title: "Alertify",
    type: "web",
    description: "A Chrome extension for tracking product prices and deals on Flipkart.",
    link: "/",
  },
  {
    id: 3,
    title: "TypeSpeed",
    type: "web",
    description: "A typing practice tool to help users improve their typing speed and accuracy through interactive challenges and real-time feedback.",
    link: "/",
  },
  {
    id: 4,
    title: "Health-Care App",
    type: "web",
    description:
      "A healthcare app focused on providing real-time chat between doctors and patients for seamless communication and consultation.",
    link: "#",
  },
];

export default function ProjectSection() {

  

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-blue-800 via-purple-700 to-cyan-600"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center animate-fade-in-up">
          My Projects
        </h2>
        <div className="flex justify-center mb-8 animate-fade-in-up animation-delay-200">
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const icons = {
    web: <FaGlobe className="w-6 h-6" />,
    wordpress: <FaWordpress className="w-6 h-6" />,
    shopify: <FaShopify className="w-6 h-6" />,
  };

  return (
    <div
      className={`bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-xl transition-all duration-300 hover:bg-opacity-20 hover:transform hover:scale-105 animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-cyan-300 mb-4">{icons[project.type]}</div>
      <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-cyan-100 text-sm mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-300 hover:text-white transition-colors duration-300"
      >
        View Project
      </a>
    </div>
  );
}
