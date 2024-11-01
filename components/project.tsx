import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, ExternalLink, Code } from "lucide-react";
import Image from "next/image";
import { projectsData } from "@/lib/data";

// Define the type based on the structure of projectsData
type ProjectData = (typeof projectsData)[number];

type ProjectCardProps = ProjectData;

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,          // Ensure 'title' is included here
  description,
  tags,
  imageUrl,
  projectUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col transition-transform hover:scale-105 shadow-md min-w-[350px] max-w-[350px]" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          {isExpanded ? "Less" : "More"}
        </button>
      </div>

      {/* Image */}
      <motion.div
        className="relative h-48 mb-4 rounded-lg overflow-hidden"
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={imageUrl}
          alt={`${title} project screenshot`}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Expandable Description */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      </motion.div>

      {/* View Project Button */}
      <div className="mt-auto">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gray-200 text-black py-2 rounded-lg hover:bg-gray-300 transition-colors"
        >
          <Eye size={18} />
          View Project
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

const ProjectsTimeline = () => {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="flex items-center justify-center gap-2 mb-8">
        <Code className="text-blue-500" size={24} />
        <h2 className="text-3xl font-bold text-black">My Projects</h2>
        <Code className="text-blue-500" size={24} />
      </div>

      {/* Scrollable container with snap scrolling */}
      <div className="relative max-w-[90vw] mx-auto">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="flex gap-6 pb-4 min-w-min">
            {projectsData?.length > 0 ? (
              projectsData.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))
            ) : (
              <p className="text-gray-400">No projects to display.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTimeline;
