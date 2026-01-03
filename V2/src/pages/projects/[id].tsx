import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { fallbackProjects } from '@/data/projects';
import { getProjectContent, getAllProjects, ProjectContent } from '@/lib/markdown';

interface ProjectPageProps {
  projectData: ProjectContent | null;
  fallbackProject?: {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    types: string[];
    topics: string[];
    imageUrl: string;
  };
}

export default function ProjectPage({ projectData, fallbackProject }: ProjectPageProps) {
  // Use markdown content if available, otherwise use fallback from projects.ts
  const hasMarkdown = projectData !== null;
  const project = hasMarkdown ? projectData.metadata : fallbackProject;
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12">
        <p className="text-gray-400">Project not found.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title || 'Project'} | Angel's Portfolio</title>
        <meta name="description" content={project.description} />
      </Head>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Projects
        </Link>

        {/* Hero Image */}
        {project.imageUrl && (
          <div className="mb-12 rounded-lg overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
        )}

        {/* Markdown Content */}
        {hasMarkdown ? (
          <article className="prose prose-invert prose-primary max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: projectData.content }}
              className="markdown-content"
            />
          </article>
        ) : (
          /* Fallback UI */
          <>
            {/* Hero Image */}
            {project.imageUrl && (
              <div className="mb-12 rounded-lg overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <img 
                  src={project.imageUrl} 
                  alt={project.title || fallbackProject?.name}
                  className="w-full h-auto max-h-96 object-contain"
                />
              </div>
            )}

            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {project.title || fallbackProject?.name}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-4">Project Type</h2>
              <div className="flex flex-wrap gap-3">
                {project.types.map((type) => (
                  <span
                    key={type}
                    className="px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/30 text-sm font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {project.topics && project.topics.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-accent mb-4">Topics</h2>
                <div className="flex flex-wrap gap-3">
                  {project.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/30 text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-16 p-8 bg-dark-lighter border border-primary/20 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Project Details</h2>
              <p className="text-gray-400">
                Create a markdown file at <code className="text-primary">content/projects/{fallbackProject?.id}.md</code> to add detailed content for this project.
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = getAllProjects();
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  const projectId = params?.id as string;
  
  // Try to load markdown content
  const projectData = await getProjectContent(projectId);
  
  // Get fallback data from projects
  const projects = getAllProjects();
  const fallbackProject = projects.find((p) => p.id === projectId);

  if (!projectData && !fallbackProject) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projectData,
      fallbackProject: fallbackProject ? {
        id: fallbackProject.id,
        name: fallbackProject.name,
        description: fallbackProject.description,
        technologies: fallbackProject.technologies,
        types: fallbackProject.types,
        topics: fallbackProject.topics,
      } : undefined,
    },
  };
};
