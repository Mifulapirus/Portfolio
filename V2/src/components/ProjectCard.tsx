import Link from 'next/link';
import { Project } from '@/data/projects';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/projects/${project.id}`}>
      <div 
        className="bg-dark-lighter border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:scale-105 cursor-pointer h-[320px] flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
          {project.imageUrl ? (
            <img 
              src={project.imageUrl} 
              alt={project.name}
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-4xl font-bold text-white/20">{project.name.charAt(0)}</span>
          )}
        </div>
        <div className="p-4 md:p-6 flex-grow flex flex-col min-h-0">
          <h3 className="text-base md:text-xl font-bold text-white mb-2 flex-shrink-0">{project.name}</h3>
          <div className="relative flex-grow mb-4 overflow-hidden">
            <p className={`text-gray-400 text-sm transition-all duration-300 ${
              isHovered ? 'line-clamp-none' : 'line-clamp-1'
            }`}>
              {project.description}
            </p>
            {!isHovered && (
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-dark-lighter to-transparent pointer-events-none" />
            )}
          </div>
          <div className="flex gap-2 mt-auto flex-shrink-0 min-w-0">
            <div className="flex gap-2 overflow-hidden">
              {project.technologies.slice(0, 2).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30 whitespace-nowrap flex-shrink-0"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.technologies.length > 2 && (
              <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30 whitespace-nowrap flex-shrink-0">
                +{project.technologies.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
