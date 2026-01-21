<template>
  <section class="w-full max-w-[1400px] px-6 md:px-20 lg:px-10 py-32" id="stack">
    <div class="flex flex-col gap-2 mb-12">
      <h2 class="text-white text-4xl font-bold tracking-tight">Core Stack</h2>
      <p class="text-slate-400 text-lg">The tools I use to bring ideas to life</p>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      <div 
        v-for="tech in technologies" 
        :key="tech.name"
        class="flex flex-col gap-4 rounded-2xl border border-border-dark bg-surface-dark p-8 items-start custom-glow transition-all"
      >
        <span class="material-symbols-outlined text-primary text-4xl">{{ tech.icon }}</span>
        <h3 class="text-white text-lg font-bold">{{ tech.name }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
const technologies = [
  { name: 'React', icon: 'data_object' },
  { name: 'Next.js', icon: 'layers' },
  { name: 'Node.js', icon: 'memory' },
  { name: 'PostgreSQL', icon: 'database' },
  { name: 'Docker', icon: 'deployed_code' },
  { name: 'AWS', icon: 'cloud' }
];
</script>
