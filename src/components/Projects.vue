<template>
  <section class="w-full max-w-[1400px] px-6 md:px-20 lg:px-10 py-20" id="projects">
    <div class="flex items-end justify-between mb-12">
      <div class="flex flex-col gap-2">
        <h2 class="text-white text-4xl font-bold tracking-tight">Featured Projects</h2>
        <p class="text-slate-400 text-lg">Selected work focused on performance and scale</p>
      </div>
      <a class="text-primary text-sm font-bold border-b border-primary/30 pb-1 hover:border-primary transition-all" href="#">
        View all archive
      </a>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <router-link 
        v-for="project in projects" 
        :key="project.id"
        :to="`/project/${project.slug}`"
        class="group rounded-2xl overflow-hidden border border-border-dark bg-surface-dark transition-all duration-500 hover:scale-[1.01] flex flex-col"
      >
        <!-- Imagen sin texto superpuesto -->
        <div class="relative aspect-[16/10] overflow-hidden">
          <img 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            :src="project.thumbnail"
            :alt="project.title"
          />
        </div>
        
        <!-- Contenido de texto debajo de la imagen -->
        <div class="p-6 flex flex-col gap-3 flex-grow">
          <h3 class="text-white text-2xl font-bold group-hover:text-primary transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-slate-400 text-sm line-clamp-2">{{ project.description }}</p>
          
          <div class="flex items-center gap-2 text-primary font-bold text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
            <span>View Project</span>
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>
        
        <!-- Tecnologías debajo de la card -->
        <div class="p-4 flex items-center gap-3">
          <Icon
            v-for="(tech, index) in filteredTags(project.tags).slice(0, 5)"
            :key="index"
            :icon="getTechIconName(tech)"
            class="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
            :title="tech"
          />
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import projectsData from '../data/projects.json';

const projects = ref(projectsData);

// Mantener solo lenguajes, frameworks, bases de datos y Vite
const relevantMap = {
  'Vue': 'logos:vue',
  'Vue 3': 'logos:vue',
  'Vue.js': 'logos:vue',
  'React': 'logos:react',
  'Angular': 'logos:angular-icon',
  'Django': 'skill-icons:django',
  'Python': 'logos:python',
  'TypeScript': 'logos:typescript-icon',
  'JavaScript': 'logos:javascript',
  'PostgreSQL': 'logos:postgresql',
  'SQLite': 'simple-icons:sqlite',
  'Vite': 'logos:vitejs',
  'Vuetify': 'logos:vuetify',
  'TailwindCSS': 'logos:tailwindcss-icon',
  'Tailwind CSS': 'logos:tailwindcss-icon',
  'HTML': 'logos:html-5',
  'CSS': 'logos:css-3'
};

const normalize = (tag) => {
  switch (tag) {
    case 'Vue 3':
    case 'Vue.js':
    case 'Vue.js 3':
    case 'Vue.js 3.5':
      return 'Vue';
    case 'Tailwind CSS':
      return 'TailwindCSS';
    default:
      return tag;
  }
};

const filteredTags = (tags) => {
  const normalized = tags
    .map((t) => normalize(t))
    .filter((t) => Object.prototype.hasOwnProperty.call(relevantMap, t));

  const unique = Array.from(new Set(normalized));

  const priority = {
    'Vue': 0,
    'React': 0,
    'Angular': 0,
    'Django': 0,
    'TypeScript': 1,
    'JavaScript': 1,
    'Python': 1,
    'Vite': 2,
    'PostgreSQL': 3,
    'SQLite': 3,
    'TailwindCSS': 4,
    'Vuetify': 4
  };

  const sorted = unique.sort((a, b) => (priority[a] ?? 99) - (priority[b] ?? 99));

  const limit = 5;
  let top = sorted.slice(0, limit);
  if (unique.includes('Vite') && !top.includes('Vite')) {
    top[top.length - 1] = 'Vite';
  }
  return top;
};

const getTechIconName = (tech) => {
  const key = normalize(tech);
  return relevantMap[key] || 'mdi:code-tags';
};
</script>
