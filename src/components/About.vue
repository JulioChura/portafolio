<template>
  <section class="w-full py-24 bg-background-dark" id="about">
    <div class="max-w-[1400px] mx-auto px-6 md:px-20">
      <div class="bg-surface-dark/40 border border-border-dark p-8 md:p-12 lg:p-16 rounded-[2.5rem] relative overflow-hidden">
        <div class="absolute -top-24 -right-24 size-96 bg-primary/5 blur-[120px] rounded-full"></div>
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
          <!-- Image Column -->
          <div class="lg:col-span-5 flex flex-col gap-8">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-tr from-primary/40 to-transparent rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div class="relative rounded-[1.8rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
                <img 
                  alt="Professional Portrait" 
                  class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 hover:scale-100" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmxPxletF2K4M8MhOsfTXPgdxnHXtE_evZP1TbzW4FUumGQSYhMV5742MNQCvKwTk2XB6sOxZObckxqtGHzJd0TJ9ylp7k-3NBGGgJT2GIjAhBs57mC3NUlo45-47ZHC5nqLwxSLT8I4CrNWVYAP4o1go5bjIZYEkUcX0cmKVWf02ickpRucmaG_1Y1oeryBthUBJpnezNsPMpPXbBlo7FBnQVNBHhxDpT--PdTDOblXv156cMGm-ynVaANaofgMC9In4F7RKzhf9V"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div class="flex flex-col gap-4">
              <h3 class="text-white text-xl font-bold flex items-center gap-3">
                <span class="w-8 h-[2px] bg-primary"></span>
                Experience Highlights
              </h3>
              <div class="space-y-4">
                <div class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                  <span class="text-primary font-bold text-lg">01.</span>
                  <div>
                    <p class="text-white font-medium">8+ Years Full Stack</p>
                    <p class="text-slate-500 text-sm">Specializing in Next.js & Cloud Infrastructure.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                  <span class="text-primary font-bold text-lg">02.</span>
                  <div>
                    <p class="text-white font-medium">50+ Projects Delivered</p>
                    <p class="text-slate-500 text-sm">From startup MVPs to enterprise dashboards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Content Column -->
          <div class="lg:col-span-7 flex flex-col gap-10">
            <div class="flex flex-col gap-4">
              <span class="text-primary font-bold tracking-[0.2em] text-sm uppercase">About Me</span>
              <h2 class="text-white text-4xl md:text-5xl font-bold tracking-tight">Beyond the Code</h2>
            </div>
            
            <div class="flex flex-col gap-6 text-slate-300 text-lg leading-relaxed font-light">
              <p>
                My journey in technology started with a simple curiosity: how do things work under the hood? Over the past decade, that curiosity evolved into a professional mission to build software that isn't just functional, but genuinely impactful.
              </p>
              <p>
                I specialize in bridging the gap between complex engineering requirements and intuitive user experiences. I believe that clean code is a prerequisite, but the real value lies in understanding the human element behind every digital interaction.
              </p>
              <p>
                When I'm not architecting systems, I'm likely exploring the intersection of design and performance, ensuring that every application I build is as fast as it is beautiful. My approach is rooted in technical rigor and a relentless drive for innovation.
              </p>
            </div>
            
            <div class="flex flex-col gap-6 mt-4">
              <h3 class="text-white text-xl font-bold">Core Philosophy</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                  <span class="material-symbols-outlined text-primary mb-3">lightbulb</span>
                  <h4 class="text-white font-bold text-sm mb-1">Problem Solving</h4>
                  <p class="text-slate-500 text-xs">Finding elegant solutions to complex logic hurdles.</p>
                </div>
                <div class="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                  <span class="material-symbols-outlined text-primary mb-3">groups</span>
                  <h4 class="text-white font-bold text-sm mb-1">Teamwork</h4>
                  <p class="text-slate-500 text-xs">Collaboration as the foundation for great products.</p>
                </div>
                <div class="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                  <span class="material-symbols-outlined text-primary mb-3">psychology</span>
                  <h4 class="text-white font-bold text-sm mb-1">Learning</h4>
                  <p class="text-slate-500 text-xs">Constant evolution in a fast-paced ecosystem.</p>
                </div>
              </div>
            </div>
            
            <div class="pt-8 border-t border-border-dark flex flex-wrap gap-3">
              <span class="px-4 py-2 rounded-full bg-surface-dark border border-border-dark text-slate-400 text-xs font-medium">☕ Coffee Enthusiast</span>
              <span class="px-4 py-2 rounded-full bg-surface-dark border border-border-dark text-slate-400 text-xs font-medium">🎸 Guitar Player</span>
              <span class="px-4 py-2 rounded-full bg-surface-dark border border-border-dark text-slate-400 text-xs font-medium">⛰️ Mountain Hiker</span>
              <span class="px-4 py-2 rounded-full bg-surface-dark border border-border-dark text-slate-400 text-xs font-medium">🛸 Sci-Fi Reader</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
