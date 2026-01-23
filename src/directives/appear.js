export const appear = {
  mounted(el, binding) {
    const opts = binding?.value || {};
    const threshold = opts.threshold ?? 0.15;
    const rootMargin = opts.rootMargin ?? '0px';
    const once = opts.once ?? true;
    const inClass = opts.inClass ?? 'is-inview';

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          el.classList.add(inClass);
          if (once) io.unobserve(el);
        } else if (!once) {
          el.classList.remove(inClass);
        }
      }
    }, { threshold, rootMargin });

    el.__io = io;
    io.observe(el);
  },
  unmounted(el) {
    if (el.__io) {
      el.__io.disconnect();
      delete el.__io;
    }
  }
};
