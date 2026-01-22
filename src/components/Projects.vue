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
          <img 
            v-for="(tech, index) in project.tags.slice(0, 5)" 
            :key="index"
            :src="getTechIcon(tech)"
            :alt="tech"
            :title="tech"
            class="w-6 h-6 object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import projectsData from '../data/projects.json';

const projects = ref(projectsData);

// Mapeo de tecnologías a sus iconos
const techIcons = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'TS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Vue 3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Vue 3.5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Vue.js 3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Vue.js 3.5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  'TailwindCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Pinia': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'Django REST Framework': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'JWT': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
  'Angular 19': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
  'Angular Material': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
  'RxJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rxjs/rxjs-original.svg',
  'A-Frame': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'Three.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'WebVR': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'MediaPipe': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Cloudinary': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Axios': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Vue Router': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Vuetify': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Vuetify 3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Vue ChartJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Leaflet': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Mercado Pago': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'jsPDF': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'HTML2Canvas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Gmail SMTP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'API REST': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Go': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  'WebSocket': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  'Docker Compose': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
};

const getTechIcon = (tech) => {
  return techIcons[tech] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
};
</script>
