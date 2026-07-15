// JavaScript Document
document.addEventListener("DOMContentLoaded", () => {
  // ---- Efecto 1: opacidad palabra por palabra (párrafos de texto plano) ----
  const parrafos = document.querySelectorAll(".scroll-text");
 
  parrafos.forEach((p) => {
    const palabras = p.textContent.trim().split(/\s+/);
    p.innerHTML = palabras
      .map((palabra) => `<span class="palabra">${palabra}</span>`)
      .join(" ");
  });
 
  const todasLasPalabras = document.querySelectorAll(".scroll-text .palabra");
 
  function actualizarOpacidad() {
    const centro = window.innerHeight * 0.5;
 
    todasLasPalabras.forEach((palabra) => {
      const rect = palabra.getBoundingClientRect();
      const posicionPalabra = rect.top + rect.height / 2;
      const distancia = posicionPalabra - centro;
 
      let opacidad = 1 - Math.max(0, distancia) / 300;
      opacidad = Math.min(1, Math.max(0.15, opacidad));
 
      palabra.style.opacity = opacidad;
    });
  }
 
  window.addEventListener("scroll", actualizarOpacidad);
  actualizarOpacidad();
 
  // ---- Efecto 2: aparece al entrar en pantalla (bloques con HTML interno) ----
  const elementosReveal = document.querySelectorAll(".reveal");
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });
 
  elementosReveal.forEach((el) => observer.observe(el));
});