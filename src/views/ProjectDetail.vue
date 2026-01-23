<template>
  <div v-if="project" class="bg-background-dark text-slate-100 min-h-screen flex flex-col">
    <Header />

    <main class="flex-1 max-w-6xl mx-auto w-full px-6 py-12 lg:py-20">
      <!-- BOTON VOLVER -->
      <div class="mb-6">
        <router-link to="/#projects" class="inline-flex items-center gap-2 px-4 py-2 bg-surface-dark rounded-lg hover:bg-white/10 text-white font-bold transition-colors">
          <span class="material-symbols-outlined">arrow_back</span> Volver
        </router-link>
      </div>

      <!-- Titulo del proyecto -->
      <div class="mb-12">
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
          {{ project.title }}
        </h1>
        <p class="text-lg opacity-60 max-w-2xl font-light">
          {{ project.description }}
        </p>
      </div>

      <!-- GRID DE IMAGENES -->
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        <div 
          v-for="(image, index) in displayImages" 
          :key="index"
          class="relative group cursor-pointer"
          @click="openLightbox(index)"
        >
          <img 
            :src="image" 
            :alt="`${project.title} screenshot ${index + 1}`"
            class="w-full h-64 object-cover rounded-2xl"
          />
          <!-- Badge +N si hay mas imágenes -->
          <div 
            v-if="index === 2 && project.images.length > 3"
            class="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold rounded-2xl"
          >
            +{{ project.images.length - 3 }}
          </div>
        </div>
      </section>

      <!-- LIGHTBOX MODAL -->
      <Teleport to="body">
        <div 
          v-if="lightboxOpen" 
          class="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          @click="closeLightbox"
        >
          <!-- Botón cerrar -->
          <button 
            class="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            @click="closeLightbox"
          >
            <span class="material-symbols-outlined text-4xl">close</span>
          </button>

          <!-- Botón anterior -->
          <button 
            v-if="currentImageIndex > 0"
            class="absolute left-4 text-white hover:text-primary transition-colors z-10"
            @click.stop="previousImage"
          >
            <span class="material-symbols-outlined text-4xl">chevron_left</span>
          </button>

          <!-- Controles de zoom -->
          <div class="absolute top-4 left-4 flex flex-col gap-2 z-10">
            <button 
              class="bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors"
              @click.stop="zoomIn"
            >
              <span class="material-symbols-outlined">add</span>
            </button>
            <button 
              class="bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors"
              @click.stop="zoomOut"
            >
              <span class="material-symbols-outlined">remove</span>
            </button>
            <button 
              class="bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors"
              @click.stop="resetZoom"
              :title="'Reset zoom'"
            >
              <span class="material-symbols-outlined">refresh</span>
            </button>
          </div>

          <!-- Imagen -->
          <div 
            ref="imageContainer"
            class="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center overflow-hidden" 
            @click.stop
            @wheel.prevent="handleWheel"
            @mousedown="startDrag"
            @mousemove="onDrag"
            @mouseup="endDrag"
            @mouseleave="endDrag"
            @touchstart.passive="startDrag"
            @touchmove.prevent="onDrag"
            @touchend.passive="endDrag"
          >
            <img 
              ref="zoomImage"
              :src="project.images[currentImageIndex]" 
              :alt="`${project.title} screenshot ${currentImageIndex + 1}`"
              class="max-w-full max-h-full object-contain rounded-lg transition-transform duration-200"
              :style="{
                transform: `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`,
                cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }"
              draggable="false"
            />
            <!-- Contador de imágenes -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
              {{ currentImageIndex + 1 }} / {{ project.images.length }}
            </div>
            <!-- Indicador de zoom -->
            <div class="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm" v-if="zoomLevel !== 1">
              {{ Math.round(zoomLevel * 100) }}%
            </div>
          </div>

          <!-- Botón siguiente -->
          <button 
            v-if="currentImageIndex < project.images.length - 1"
            class="absolute right-4 text-white hover:text-primary transition-colors z-10"
            @click.stop="nextImage"
          >
            <span class="material-symbols-outlined text-4xl">chevron_right</span>
          </button>
        </div>
      </Teleport>

      <!-- DESCRIPCION DEL PROYECTO -->
      <div class="mb-12">
        <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">description</span>
          Project Overview
        </h2>
        <div class="space-y-4 text-slate-400 leading-relaxed font-light">
          <p v-for="(paragraph, index) in project.fullDescription" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <!-- TECH STACK -->
      <div class="mb-12">
        <h3 class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Tech Stack</h3>
        <div class="flex flex-wrap gap-2">
          <div 
            v-for="tech in project.techStack" 
            :key="tech"
            class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-dark border border-white/5 text-xs hover:border-primary/50 transition-colors"
          >
            <span class="material-symbols-outlined text-[14px] text-primary">code</span>
            <span>{{ tech }}</span>
          </div>
        </div>
      </div>

      <!-- BOTONES LIVE / GITHUB -->
      <div :class="['pt-12 border-t border-white/5 grid gap-4 mb-20', hasBoth ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1']">
        <!-- GitHub (izquierda) -->
        <a 
          v-if="project.githubUrl"
          :href="project.githubUrl"
          class="flex items-center justify-center gap-3 py-5 rounded-2xl border border-white/10 bg-surface-dark hover:bg-white/5 text-white font-bold transition-all"
        >
          <span class="material-symbols-outlined">terminal</span>
          Explore on GitHub
        </a>
        <!-- Live Demo (azul, derecha) -->
        <a 
          v-if="project.liveUrl"
          :href="project.liveUrl"
          class="flex items-center justify-center gap-3 py-5 rounded-2xl bg-primary hover:bg-primary/80 text-white font-bold transition-all shadow-lg shadow-primary/20"
        >
          <span class="material-symbols-outlined">rocket_launch</span>
          View Live Demo
        </a>
      </div>
    </main>
  </div>
  
  <div v-else class="bg-background-dark text-white min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">Project not found</h1>
      <router-link to="/" class="text-primary hover:underline">Return to home</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router';
import projectsData from '../data/projects.json';
import Header from '../components/Header.vue';

const route = useRoute();
const project = ref(null);
const lightboxOpen = ref(false);
const currentImageIndex = ref(0);
const zoomLevel = ref(1);
const panX = ref(0);
const panY = ref(0);
const isDragging = ref(false);
const dragStartX = ref(0);
const dragStartY = ref(0);
const dragStartPanX = ref(0);
const dragStartPanY = ref(0);
// Swipe navigation when not zoomed
const isSwiping = ref(false);
const swipeStartX = ref(0);
const swipeDeltaX = ref(0);

const displayImages = computed(() => {
  if (!project.value) return [];
  return project.value.images.slice(0, 3);
});

// Estado de disponibilidad de URLs para ajustar layout
const hasGitHub = computed(() => !!(project.value && project.value.githubUrl));
const hasLive = computed(() => !!(project.value && project.value.liveUrl));
const hasBoth = computed(() => hasGitHub.value && hasLive.value);

const openLightbox = (index) => {
  currentImageIndex.value = index;
  lightboxOpen.value = true;
  resetZoom();
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  resetZoom();
};

const nextImage = () => {
  if (currentImageIndex.value < project.value.images.length - 1) {
    currentImageIndex.value++;
    resetZoom();
  }
};

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
    resetZoom();
  }
};

const zoomIn = () => {
  zoomLevel.value = Math.min(zoomLevel.value + 0.5, 5);
};

const zoomOut = () => {
  zoomLevel.value = Math.max(zoomLevel.value - 0.5, 1);
  if (zoomLevel.value === 1) {
    panX.value = 0;
    panY.value = 0;
  }
};

const resetZoom = () => {
  zoomLevel.value = 1;
  panX.value = 0;
  panY.value = 0;
};

const handleWheel = (event) => {
  const delta = event.deltaY > 0 ? -0.1 : 0.1;
  zoomLevel.value = Math.max(1, Math.min(5, zoomLevel.value + delta));
  
  if (zoomLevel.value === 1) {
    panX.value = 0;
    panY.value = 0;
  }
};

const startDrag = (event) => {
  const clientX = 'touches' in event && event.touches.length ? event.touches[0].clientX : event.clientX;
  const clientY = 'touches' in event && event.touches.length ? event.touches[0].clientY : event.clientY;

  if (zoomLevel.value > 1) {
    isDragging.value = true;
    dragStartX.value = clientX;
    dragStartY.value = clientY;
    dragStartPanX.value = panX.value;
    dragStartPanY.value = panY.value;
  } else {
    // prepare swipe navigation when image is at base zoom
    isSwiping.value = true;
    swipeStartX.value = clientX;
    swipeDeltaX.value = 0;
  }
};

const onDrag = (event) => {
  const clientX = 'touches' in event && event.touches.length ? event.touches[0].clientX : event.clientX;
  const clientY = 'touches' in event && event.touches.length ? event.touches[0].clientY : event.clientY;

  if (isDragging.value && zoomLevel.value > 1) {
    const deltaX = (clientX - dragStartX.value) / zoomLevel.value;
    const deltaY = (clientY - dragStartY.value) / zoomLevel.value;
    panX.value = dragStartPanX.value + deltaX;
    panY.value = dragStartPanY.value + deltaY;
  } else if (isSwiping.value && zoomLevel.value === 1) {
    swipeDeltaX.value = clientX - swipeStartX.value;
  }
};

const endDrag = () => {
  // finish pan
  isDragging.value = false;
  // finish swipe: if horizontal delta exceeds threshold, navigate
  if (isSwiping.value && zoomLevel.value === 1) {
    const threshold = 50; // pixels
    if (Math.abs(swipeDeltaX.value) > threshold) {
      if (swipeDeltaX.value < 0 && currentImageIndex.value < project.value.images.length - 1) {
        nextImage();
      } else if (swipeDeltaX.value > 0 && currentImageIndex.value > 0) {
        previousImage();
      }
    }
  }
  isSwiping.value = false;
  swipeDeltaX.value = 0;
};

onMounted(() => {
  const slug = route.params.slug;
  project.value = projectsData.find(p => p.slug === slug);
});

watch(project, (p) => {
  if (!p) return

  useHead({
    title: `${p.title} | Portfolio.dev`,
    meta: [
      {
        name: 'description',
        content: p.description
      },
      {
        property: 'og:title',
        content: p.title
      },
      {
        property: 'og:description',
        content: p.description
      }
    ]
  })
})



</script>
