<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
    <Header />
    
    <main class="flex flex-col items-center w-full">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Stack from '../components/Stack.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';
</script>
