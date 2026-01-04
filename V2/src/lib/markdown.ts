import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Project } from '@/data/projects';

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
    console.warn('Projects directory not found:', projectsDirectory);
    return [];
  }

  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    const projects: Project[] = [];

    fileNames.forEach(fileName => {
      if (!fileName.endsWith('.md')) return;

      try {
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        // Require complete frontmatter
        if (data.id && data.title) {
          projects.push({
            id: data.id,
            name: data.title,
            description: data.description || '',
            technologies: data.technologies || [],
            types: data.types || [],
            topics: data.topics || [],
            imageUrl: data.imageUrl || `https://via.placeholder.com/400x300/667eea/ffffff?text=${encodeURIComponent(data.title)}`
          });
        } else {
          console.warn(`Skipping ${fileName}: missing id or title in frontmatter`);
        }
      } catch (fileError) {
        console.error(`Error reading ${fileName}:`, fileError);
      }
    });

    return projects;
  } catch (error) {
    console.error('Error loading projects from markdown:', error);
    return [];
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
