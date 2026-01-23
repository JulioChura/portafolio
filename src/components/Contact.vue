<template>
  <section class="w-full max-w-[1400px] px-6 md:px-20 lg:px-10 py-32" id="contact">
    <h2 class="text-white text-4xl font-bold tracking-tight">Contact</h2>
    <p class="text-slate-400 text-lg mb-12">Feel free to reach out for collaborations, ideas, or questions.</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-surface-dark border border-border-dark rounded-3xl p-8 md:p-16 relative overflow-hidden">
      <div class="absolute -top-24 -left-24 size-64 bg-primary/5 blur-[120px] rounded-full"></div>
      
      <!-- Contact Info -->
      <div class="flex flex-col gap-10 relative z-10">
        <div class="flex flex-col gap-4">
          <span class="text-primary font-bold tracking-[0.2em] text-xs uppercase">Let's talk</span>
          <h2 class="text-white text-4xl md:text-5xl font-bold tracking-tighter">
            Let's build something <br/>extraordinary.
          </h2>
          <p class="text-slate-400 text-lg max-w-md">
            Available for new projects and professional collaborations. I respond within 24 hours.
          </p>
        </div>
        
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-4 group cursor-pointer">
            <div class="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
              <span class="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p class="text-slate-500 text-xs font-bold uppercase tracking-widest">Email</p>
              <p class="text-white font-medium">churajulio68@gmail.com</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4 group cursor-pointer">
            <div class="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
              <span class="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p class="text-slate-500 text-xs font-bold uppercase tracking-widest">Location</p>
              <p class="text-white font-medium">Remote — GMT-5 (Peru)</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact Form -->
      <div class="relative z-10">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col gap-2">
              <label class="text-slate-300 text-sm font-medium px-1">Full name</label>
              <input 
                v-model="form.name"
                class="w-full bg-white/5 border border-border-dark rounded-xl h-14 px-5 text-white placeholder:text-slate-600 transition-all" 
                placeholder="Your name" 
                type="text"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-slate-300 text-sm font-medium px-1">Email</label>
              <input 
                v-model="form.email"
                class="w-full bg-white/5 border border-border-dark rounded-xl h-14 px-5 text-white placeholder:text-slate-600 transition-all" 
                placeholder="tu@email.com" 
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
            :disabled="isLoading"
            class="w-full bg-primary text-background-dark h-16 rounded-xl font-bold text-lg tracking-tight hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(48,171,232,0.3)] transition-all flex items-center justify-center gap-3 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span v-if="isLoading">Sending...</span>
            <span v-else>Send message</span>
            <span class="material-symbols-outlined font-bold">send</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isLoading = ref(false)

const handleSubmit = async () => {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    alert('Email service configuration missing. Please set env variables.')
    return
  }
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Please complete the required fields.')
    return
  }

  isLoading.value = true

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: form.value.name,
        email: form.value.email,
        title: form.value.subject || 'New message from the portfolio',
        message: form.value.message
      },
      PUBLIC_KEY
    )


    alert('Message sent successfully')

    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    console.error(error)
    alert('Something went wrong. Please try again.')
  } finally {
    isLoading.value = false
  }
}

</script>
