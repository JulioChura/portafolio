import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProjectDetail from '../views/ProjectDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/:slug',
    name: 'ProjectDetail',
    component: ProjectDetail
  
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Standard Vue Router approach: handle saved position and wait for hash elements
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    if (to.hash) {
      const selector = to.hash;
      return new Promise((resolve) => {
        const tryResolve = () => {
          const el = document.querySelector(selector);
          if (el) resolve({ el: selector, behavior: 'smooth' });
        };
        // Try immediately and with a few short delays so the target exists after route mount
        tryResolve();
        setTimeout(tryResolve, 50);
        setTimeout(tryResolve, 150);
        setTimeout(tryResolve, 300);
        // Fallback to top if element never appears within ~1s
        setTimeout(() => resolve({ top: 0 }), 1000);
      });
    }

    return { top: 0 };
  }
});

export default router;
