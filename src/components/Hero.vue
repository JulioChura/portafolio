<template>
  <section class="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 hero-gradient overflow-hidden" id="home">
    <div class="absolute inset-0 z-0">
      <img 
        alt="Abstract Tech Background" 
        class="w-full h-full object-cover opacity-20 mix-blend-luminosity" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhanyrrPUPls0fGRbgS1Qxk_4bYxfudWOyUELtall7XempDkrDvyLsdIhNE15tUy40CgnNzFNtYFqrMpFG-2-j42cLUCUriiT8Z99Cpb-fTEnEl29U0dfaZBdDL9c3eLlT_RIzkUk9AOottvC34mo4qkWU602w9XeazqgP2QSzBf27fQWhcqe5aAvhVbcum94M0aLbAtJMPkzM1RnV4ri1bBaQlJTlgLO6AvixQqp_g2ALbxXAk8gA6yn6mCkQKVAxmrlBFnT7zo17"
      />
      <div class="absolute inset-0 bg-background-dark/60"></div>
    </div>
    
    <div class="relative z-10 max-w-4xl flex flex-col items-center gap-8">
      <div class="flex flex-col gap-6">
        <span class="text-primary font-bold tracking-[0.3em] text-sm uppercase">Full Stack Developer</span>
        <h1 class="text-white text-6xl md:text-8xl font-bold leading-[1] tracking-tighter">
          Building digital experiences <br/><span class="text-primary">with precision.</span>
        </h1>
        <p class="text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto font-normal leading-relaxed opacity-90">
          Engineering high-performance web applications with modern tech stacks and technical rigor.
        </p>
      </div>
      
      <div class="flex flex-wrap justify-center gap-6 mt-4">
        <button 
          @click="scrollToProjects"
          class="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-16 px-8 bg-primary text-background-dark text-lg font-bold tracking-tight hover:scale-105 hover:shadow-[0_0_30px_rgba(48,171,232,0.4)] transition-all"
        >
          View My Work
        </button>
        <button 
          @click="scrollToContact"
          class="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-16 px-8 border border-white/20 bg-white/5 backdrop-blur-sm text-white text-lg font-bold hover:bg-white/10 transition-all"
        >
          Let's Talk
        </button>
      </div>
    </div>
    
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
      <span class="text-[10px] uppercase tracking-widest text-slate-400">Scroll Down</span>
      <span class="material-symbols-outlined animate-bounce text-primary">expand_more</span>
    </div>
  </section>
</template>

<script setup>
const scrollToProjects = () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};
</script>
