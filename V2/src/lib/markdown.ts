import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Project, fallbackProjects } from '@/data/projects';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface ProjectMetadata {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  types: string[];
  topics: string[];
  imageUrl: string;
}

export interface ProjectContent {
  id: string;
  metadata: ProjectMetadata;
  content: string;
}

// Function to load all projects from markdown files
export function getAllProjects(): Project[] {
  // Check if directory exists
  if (!fs.existsSync(projectsDirectory)) {
    return fallbackProjects;
  }

  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    const markdownProjects: Project[] = [];

    fileNames.forEach(fileName => {
      if (!fileName.endsWith('.md')) return;

      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      if (data.id && data.title) {
        markdownProjects.push({
          id: data.id,
          name: data.title,
          description: data.description || '',
          technologies: data.technologies || [],
          types: data.types || [],
          topics: data.topics || [],
          imageUrl: data.imageUrl || `https://via.placeholder.com/400x300/667eea/ffffff?text=${encodeURIComponent(data.title)}`
        });
      }
    });

    // Merge markdown projects with fallback projects
    // Markdown projects take priority
    const markdownIds = new Set(markdownProjects.map(p => p.id));
    const remainingFallbacks = fallbackProjects.filter(p => !markdownIds.has(p.id));
    
    return [...markdownProjects, ...remainingFallbacks];
  } catch (error) {
    console.error('Error loading projects from markdown:', error);
    return fallbackProjects;
  }
}

export async function getProjectContent(id: string): Promise<ProjectContent | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { data, content } = matter(fileContents);
    
    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(content);
    const contentHtml = processedContent.toString();
    
    return {
      id,
      metadata: data as ProjectMetadata,
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error loading project ${id}:`, error);
    return null;
  }
}

export function getAllProjectIds(): string[] {
  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading projects directory:', error);
    return [];
  }
}

export async function getAllProjectsWithContent() {
  const ids = getAllProjectIds();
  const projects = await Promise.all(
    ids.map(async (id) => {
      const content = await getProjectContent(id);
      return content;
    })
  );
  
  return projects.filter(p => p !== null) as ProjectContent[];
}
