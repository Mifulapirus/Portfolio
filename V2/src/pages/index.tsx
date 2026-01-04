import { useState, useMemo } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import ProjectCard from '@/components/ProjectCard';
import FilterButton from '@/components/FilterButton';
import { Project } from '@/data/projects';
import { getAllProjects } from '@/lib/markdown';

interface HomeProps {
  projects: Project[];
}

export default function Home({ projects }: HomeProps) {
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const types = useMemo(() => {
    const typeSet = new Set<string>();
    projects.forEach(p => p.types.forEach(t => typeSet.add(t)));
    return ['all', ...Array.from(typeSet).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const typeMatch = typeFilter === 'all' || project.types.includes(typeFilter);
      return typeMatch;
    });
  }, [typeFilter]);

  return (
    <>
      <Head>
        <title>The HomeLab</title>
        <meta name="description" content="Portfolio showcasing projects across hardware and software development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="py-0 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              The HomeLab
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            It's not an office, It's a Lab!
          </p>
          
          {/* Compact Type Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
                  typeFilter === type
                    ? 'bg-primary text-dark border-primary font-semibold'
                    : 'bg-transparent text-gray-400 border-gray-700 hover:border-primary/60 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No projects match the selected filters.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const projects = getAllProjects();
  
  return {
    props: {
      projects,
    },
  };
};

