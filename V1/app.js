import { V1Projects } from './data.js';

const projectRoot = document.getElementById('projectGrid');
const filterRoot = document.getElementById('filterControls');
const countRoot = document.getElementById('projectCount');
const ctaButton = document.getElementById('ctaScroll');

const categories = ['All', ...new Set(V1Projects.map((project) => project.status))];
let activeCategory = 'All';

const renderProjectCount = (count) => {
  if (countRoot) {
    countRoot.textContent = `${count} projects`;
  }
};

const renderProjectCards = (entries) => {
  if (!projectRoot) return;
  projectRoot.innerHTML = entries
    .map((project) => `
    <article class="project-card">
      <div class="project-status">${project.status}</div>
      <h3>${project.name}</h3>
      <p>${project.short}</p>
      <div class="tags-row">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
      </div>
    </article>
  `)
    .join('');
  renderProjectCount(entries.length);
};

const updateActiveFilter = () => {
  if (!filterRoot) return;
  filterRoot.querySelectorAll('button').forEach((btn) => {
    const filter = btn.getAttribute('data-filter');
    btn.classList.toggle('is-active', filter === activeCategory);
  });
};

const handleFilterClick = (event) => {
  const target = event.target.closest('button[data-filter]');
  if (!target) return;
  activeCategory = target.getAttribute('data-filter') || 'All';
  updateActiveFilter();
  const filtered =
    activeCategory === 'All'
      ? V1Projects
      : V1Projects.filter((project) => project.status === activeCategory);
  renderProjectCards(filtered);
};

const buildFilters = () => {
  if (!filterRoot) return;
  filterRoot.innerHTML = categories
    .map(
      (category) => `
      <button class="filter-btn ${category === activeCategory ? 'is-active' : ''}" type="button" data-filter="${category}">
        ${category}
      </button>
    `
    )
    .join('');
  filterRoot.addEventListener('click', handleFilterClick);
};

if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  });
}

buildFilters();
renderProjectCards(V1Projects);
