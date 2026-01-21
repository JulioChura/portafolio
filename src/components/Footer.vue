<template>
  <footer class="w-full border-t border-border-dark bg-background-dark py-12 px-6 md:px-20 lg:px-40">
    <div class="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div class="flex items-center gap-2">
        <div class="size-6 bg-primary/20 rounded flex items-center justify-center text-primary">
          <span class="material-symbols-outlined text-sm font-bold">terminal</span>
        </div>
        <p class="text-slate-500 text-xs font-medium">© 2024 DevPortfolio. Built with Precision.</p>
      </div>
      
      <div class="flex gap-8">
        <a class="text-slate-500 hover:text-white text-xs transition-colors" href="#">Privacy Policy</a>
        <a class="text-slate-500 hover:text-white text-xs transition-colors" href="#">Accessibility</a>
        <a class="text-slate-500 hover:text-white text-xs transition-colors" href="#">Terms of Service</a>
      </div>
      
      <button 
        @click="scrollToTop"
        class="p-2 rounded-lg bg-surface-dark border border-border-dark hover:border-primary/50 transition-colors"
      >
        <span class="material-symbols-outlined text-white text-sm">arrow_upward</span>
      </button>
    </div>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
