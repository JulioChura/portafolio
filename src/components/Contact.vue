<template>
  <section class="w-full max-w-[1400px] px-6 md:px-20 lg:px-10 py-32" id="contact">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-surface-dark border border-border-dark rounded-3xl p-8 md:p-16 relative overflow-hidden">
      <div class="absolute -top-24 -left-24 size-64 bg-primary/5 blur-[120px] rounded-full"></div>
      
      <!-- Contact Info -->
      <div class="flex flex-col gap-10 relative z-10">
        <div class="flex flex-col gap-4">
          <span class="text-primary font-bold tracking-[0.2em] text-xs uppercase">Get in touch</span>
          <h2 class="text-white text-4xl md:text-5xl font-bold tracking-tighter">
            Let's build something <br/>extraordinary.
          </h2>
          <p class="text-slate-400 text-lg max-w-md">
            Currently available for new projects and professional collaborations. I respond to all inquiries within 24 hours.
          </p>
        </div>
        
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-4 group cursor-pointer">
            <div class="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
              <span class="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p class="text-slate-500 text-xs font-bold uppercase tracking-widest">Email</p>
              <p class="text-white font-medium">hello@devportfolio.com</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4 group cursor-pointer">
            <div class="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
              <span class="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p class="text-slate-500 text-xs font-bold uppercase tracking-widest">Location</p>
              <p class="text-white font-medium">Remote — GMT+1 (Europe)</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact Form -->
      <div class="relative z-10">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col gap-2">
              <label class="text-slate-300 text-sm font-medium px-1">Full Name</label>
              <input 
                v-model="form.name"
                class="w-full bg-white/5 border border-border-dark rounded-xl h-14 px-5 text-white placeholder:text-slate-600 transition-all" 
                placeholder="John Doe" 
                type="text"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-slate-300 text-sm font-medium px-1">Email Address</label>
              <input 
                v-model="form.email"
                class="w-full bg-white/5 border border-border-dark rounded-xl h-14 px-5 text-white placeholder:text-slate-600 transition-all" 
                placeholder="john@example.com" 
                type="email"
              />
            </div>
          </div>
          
          <div class="flex flex-col gap-2">
            <label class="text-slate-300 text-sm font-medium px-1">Subject</label>
            <input 
              v-model="form.subject"
              class="w-full bg-white/5 border border-border-dark rounded-xl h-14 px-5 text-white placeholder:text-slate-600 transition-all" 
              placeholder="How can I help you?" 
              type="text"
            />
          </div>
          
          <div class="flex flex-col gap-2">
            <label class="text-slate-300 text-sm font-medium px-1">Message</label>
            <textarea 
              v-model="form.message"
              class="w-full bg-white/5 border border-border-dark rounded-xl p-5 text-white placeholder:text-slate-600 transition-all resize-none" 
              placeholder="Tell me about your project..." 
              rows="5"
            ></textarea>
          </div>
          
          <button 
            type="submit"
            class="w-full bg-primary text-background-dark h-16 rounded-xl font-bold text-lg tracking-tight hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(48,171,232,0.3)] transition-all flex items-center justify-center gap-3 mt-2"
          >
            Send Message
            <span class="material-symbols-outlined font-bold">send</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
  // Add your form submission logic here
  alert('Message sent! (Demo only)');
};
</script>
