"use client";

import { useState } from "react";
import { Project } from "@/types";
import { FiGithub } from "react-icons/fi";
import { FaLayerGroup, FaChartBar } from "react-icons/fa";
import Link from "next/link";

interface ProjectsGridProps {
  projects: Project[];
}

type FilterCategory = "all" | "fullstack" | "data & ai";

interface FilterButtonProps {
  label: string;
  icon?: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton = ({
  label,
  icon,
  isActive,
  onClick,
}: FilterButtonProps) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm font-mono transition-colors ${
      isActive
        ? "bg-zinc-800 border-purple-500 text-purple-400"
        : "border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 flex flex-col">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-white font-bold text-lg">{project.title}</h3>
      <div className="border border-zinc-800 text-xs text-zinc-400 font-mono px-2 py-1 rounded">
        {project.date}
      </div>
    </div>
    <p className="text-purple-400 font-mono text-xs uppercase mb-4">
      {project.role}
    </p>
    <ul className="grow">
      {project.description?.map((point, index) => (
        <li
          key={index}
          className="text-zinc-400 text-sm py-1 list-disc list-inside"
        >
          {point}
        </li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-2 mt-auto pt-4">
      {project.tags?.map((tech) => (
        <span
          key={tech}
          className="bg-zinc-800/60 text-zinc-300 font-mono text-xs px-2 py-0.5 rounded"
        >
          #{tech}
        </span>
      ))}
    </div>
    <div className="mt-6">
      <Link
        href={project.githubUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors text-sm"
      >
        <FiGithub />
        <span>source</span>
      </Link>
    </div>
  </div>
);

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <p className="font-mono text-gray-500 mt-1">
              [projects where i applied software engineering & analysis]
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FilterButton
              label="All"
              isActive={activeFilter === "all"}
              onClick={() => setActiveFilter("all")}
            />
            <span className="text-zinc-600">|</span>
            <FilterButton
              label="Fullstack"
              icon={<FaLayerGroup />}
              isActive={activeFilter === "fullstack"}
              onClick={() => setActiveFilter("fullstack")}
            />
            <span className="text-zinc-600">|</span>
            <FilterButton
              label="Data Analyst"
              icon={<FaChartBar />}
              isActive={activeFilter === "data & ai"}
              onClick={() => setActiveFilter("data & ai")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id || project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
