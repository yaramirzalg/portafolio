const projectsData = {
  1: {
    title: "TEASER AGENTE X",
    lines: [ "Teaser de lanzamiento", "Campaña digital",
      "Storytelling y edición audiovisual"]
  },
  2: {
    title: "COMERCIAL SAMSUNG",
    lines: [
      "Comercial publicitario",
      "Contenido para redes sociales",
      "Diseño audiovisual"
    ]
  }
};
// 2. Seleccionar los elementos del HTML
const frames = document.querySelectorAll('.project-frame');
const infoTitle = document.querySelector('.info-content h1');
const infoText = document.querySelector('.info-content p');
const counter = document.getElementById('current');
// 3. Crear el "observador" que detecta qué imagen está más visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      const index = entry.target.dataset.index;
      const data = projectsData[index];
      if (data) {
        infoTitle.textContent = data.title;
        infoText.innerHTML = data.lines.join('<br>');
        counter.textContent = index;
      }
    }
  });
}, {
  threshold: 0.5 // se activa cuando el 50% de la imagen está visible
});
// 4. Decirle al observador que vigile cada imagen
frames.forEach(frame => observer.observe(frame));