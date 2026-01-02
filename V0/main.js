import { projects } from './projects.js';

const projectGrid = document.getElementById('projectGrid');
const searchInput = document.getElementById('projectSearch');
const statusFilter = document.getElementById('statusFilter');

const countFooter = document.getElementById('countFooter');

const renderProjects = (items) => {
    if (!items.length) {
        projectGrid.innerHTML = '<div class="empty-state">No projects match that filter.</div>';
        if (countFooter) {
            countFooter.textContent = '0 projects';
        }
        return;
    }

    projectGrid.innerHTML = items
        .map(
            (project) => `
            <article class="project-card">
                <div class="project-header">
                    <span class="pill">${project.status}</span>
                    <span class="pill pill-light">${project.stack}</span>
                </div>
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="tag-row">
                    ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </article>`
        )
        .join('');

    if (countFooter) {
        countFooter.textContent = `${items.length} projects`;
    }
};

const normalize = (value) => value.trim().toLowerCase();

const filterProjects = () => {
    const query = normalize(searchInput.value);
    const status = statusFilter.value;

    const filtered = projects.filter((project) => {
        const matchesSearch = [project.name, project.description, ...project.tags]
            .some((field) => normalize(field).includes(query));
        const matchesStatus = status === 'all' || project.status === status;
        return matchesSearch && matchesStatus;
    });

    renderProjects(filtered);
};

searchInput.addEventListener('input', filterProjects);
statusFilter.addEventListener('change', filterProjects);

document.addEventListener('DOMContentLoaded', () => {
    renderProjects(projects);
});
