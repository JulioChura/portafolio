<template>
  <header class="fixed top-0 z-50 w-full bg-background-dark/80 backdrop-blur-lg border-b border-border-dark">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3">
        <div class="size-8 bg-primary rounded flex items-center justify-center text-background-dark">
          <span class="material-symbols-outlined font-bold">terminal</span>
        </div>
        <h2 class="text-white text-xl font-bold leading-tight tracking-tight">{{ content.header.brand }}</h2>
      </router-link>
      
      <!-- Botón Resume y Menu Toggle -->
      <div class="flex md:order-2 items-center gap-3">
        <button class="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold transition-all hover:bg-white/20">
          <span>{{ content.header.resumeLabel }}</span>
        </button>
        
        <!-- Botón Hamburguesa -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          type="button" 
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-slate-400 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          aria-controls="navbar-menu" 
          :aria-expanded="isMenuOpen"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>
        </button>
      </div>
      
      <!-- Menú de Navegación -->
      <div 
        :class="{ 'hidden': !isMenuOpen }"
        class="items-center justify-between w-full md:flex md:w-auto md:order-1" 
        id="navbar-menu"
      >
        <nav class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white/20 rounded-lg bg-background-dark/95 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
          <a
            v-for="item in content.header.nav"
            :key="item.id"
            @click="handleMenuClick(item.id)"
            class="block py-2 px-3 text-slate-400 rounded hover:bg-white/10 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 transition-colors cursor-pointer"
          >
            {{ item.label }}
          </a>
          
          <!-- Botón Resume en menú móvil -->
          <button class="sm:hidden flex w-full cursor-pointer items-center justify-center rounded-lg h-10 px-5 mt-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold transition-all hover:bg-white/20">
            <span>{{ content.header.resumeLabel }}</span>
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import content from '../data/content.json';

const router = useRouter();
const isMenuOpen = ref(false);

const scrollToSection = (sectionId) => {
  if (router.currentRoute.value.name !== 'Home') {
    router.push('/').then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

const handleMenuClick = (sectionId) => {
  isMenuOpen.value = false; // Cerrar el menú móvil
  scrollToSection(sectionId);
};
</script>
