// Datos de cada galería: foto principal + extras + descripción
// Cambia los nombres de archivo (img/...) por los reales que tengas en tu carpeta "images/"
const datosGalerias = {
  resistencia: {
    titulo: "Resistencia",
    descripcion: "Resistencia explora la capacidad humana de perseverar a través del esfuerzo físico y mental. La serie reúne escenas de taekwondo y fútbol para mostrar que, aunque se practiquen disciplinas diferentes, ambas comparten valores. Propuesta visual: la serie está realizada en blanco y negro para enfatizar las formas, las texturas y las expresiones de los sujetos, eliminando el protagonismo del color y permitiendo que la atención recaiga en el lenguaje corporal y la intensidad de la acción. La composición alterna planos medios y abiertos para mostrar tanto la interacción entre los deportistas como la relación entre el sujeto y su entorno",
    fotos: [
      "images/tae.jpg",
      "images/2123.jpg",
      "images/2168.jpg",
      "images/2181.jpg"
    ]
  },
  petalo: {
    titulo: "El Último Pétalo",
    descripcion: "El último pétalo reflexiona sobre la fragilidad de las emociones y los procesos de transformación personal. Inspirada en el simbolismo de la rosa, la serie utiliza el último pétalo como metáfora de aquello que permanece cuando todo lo demás parece haberse desprendido: la esperanza, la identidad o la capacidad de seguir adelante. Cada imagen representa un instante distinto dentro de ese proceso, invitando al espectador a interpretar su propio significado. Propuesta visual: emplea una paleta cromática dominada por verdes y rojos para generar un fuerte contraste visual y reforzar la carga simbólica de los elementos presentes en escena. El rojo funciona como representación de la pasión, el amor y la vulnerabilidad, mientras que el fondo verde aporta equilibrio y profundidad. Se crean sombras marcadas que enfatizan el volumen del rostro y aportan una atmósfera íntima. La composición centra la atención en la expresión facial y en la relación entre la modelo y las rosas, convirtiendo estos elementos en el eje narrativo de la colección.",
    fotos: [
      "images/rosas.jpg",
      "images/3746.jpg",
      "images/3764.jpg",
      "images/3811.jpg"
    ]
  },
  perspectiva: {
    titulo: "Perspectiva",
    descripcion: "Perspectiva explora la forma en que la realidad cambia según el punto desde el que es observada. A través del uso de planos geométricos, sombras y contrastes cromáticos, la serie construye escenarios donde el sujeto interactúa con el espacio para cuestionar la percepción visual y emocional del espectador. Las composiciones utilizan formas simples y bloques de color como elementos narrativos que transforman retratos cotidianos en imágenes con una lectura gráfica y conceptual.",
    fotos: [
      "images/mira.jpg",
      "images/3855.jpg",
      "images/3862.jpg",
      "images/3852.jpg"
    ]
  },
  resplandor: {
    titulo: "Intermedio",
    descripcion: "Intermedio aborda la construcción de la identidad a través de la puesta en escena. Mediante una paleta cromática vibrante y elementos gráficos de gran presencia visual, la serie propone un contraste entre la expresividad del entorno y la aparente contención emocional de los personajes. Las imágenes invitan a reflexionar sobre las máscaras que se adoptan en distintos contextos y sobre el espacio que existe entre la imagen proyectada y la experiencia interior.",
    fotos: [
      "images/seb.jpg",
      "images/2799.jpg",
      "images/2939.jpg",
      "images/2772.jpg"
    ]
  },
  eclipse: {
    titulo: "Eclipse Interior",
    descripcion: "Eclipse Interior representa aquellos momentos en los que las emociones parecen ocultar temporalmente la identidad. La iluminación en tonos violetas y azules crea una atmósfera onírica donde los personajes transitan entre la introspección, el deseo y la incertidumbre. La serie utiliza el retrato como medio para explorar la dualidad entre lo que se muestra al exterior y aquello que permanece oculto, convirtiendo la luz y la sombra en metáforas del mundo emocional.",
    fotos: [
      "images/citl.jpg",
      "images/3941.jpg",
      "images/3934.jpg",
      "images/3942.jpg"
    ]
  },
  silencio: {
    titulo: "Silencio",
    descripcion: "Silencio explora la introspección como un espacio de encuentro con uno mismo. La oscuridad domina la escena y reduce el entorno a lo esencial, permitiendo que la luz revele únicamente aquello que resulta indispensable para construir la narrativa. Los elementos presentes funcionan como símbolos abiertos que invitan al espectador a completar el significado desde su propia experiencia.",
    fotos: [
      "images/jos.jpg",
      "images/2449.jpg",
      "images/2559.jpg",
    ]
  }
};
 
const modal = document.getElementById('galeriaModal');
const imgGrande = document.getElementById('galeriaImgGrande');
const tituloEl = document.getElementById('galeriaTitulo');
const descEl = document.getElementById('galeriaDescripcion');
const miniaturasEl = document.getElementById('galeriaMiniaturas');
const cerrarBtn = document.getElementById('galeriaCerrar');
 
function abrirGaleria(idGaleria) {
  const data = datosGalerias[idGaleria];
  if (!data) return;
 
  tituloEl.textContent = data.titulo;
  descEl.textContent = data.descripcion;
  imgGrande.src = data.fotos[0];
 
  // generar miniaturas
  miniaturasEl.innerHTML = '';
  data.fotos.forEach((foto, index) => {
    const mini = document.createElement('img');
    mini.src = foto;
    mini.classList.add('mini-thumb');
    if (index === 0) mini.classList.add('activa');
 
    mini.addEventListener('click', () => {
      imgGrande.src = foto;
      document.querySelectorAll('.mini-thumb').forEach(m => m.classList.remove('activa'));
      mini.classList.add('activa');
    });
 
    miniaturasEl.appendChild(mini);
  });
 
  modal.classList.add('activo');
  document.body.style.overflow = 'hidden'; // evita scroll del fondo
}
 
function cerrarGaleria() {
  modal.classList.remove('activo');
  document.body.style.overflow = '';
}
 
// Listeners para abrir desde cada foto (tae, rosas, mira, seb, citl, jos)
document.querySelectorAll('[data-galeria]').forEach(item => {
  item.addEventListener('click', () => {
    const idGaleria = item.getAttribute('data-galeria');
    abrirGaleria(idGaleria);
  });
});
 
cerrarBtn.addEventListener('click', cerrarGaleria);
 
// cerrar al hacer click fuera del contenido
modal.addEventListener('click', (e) => {
  if (e.target === modal) cerrarGaleria();
});
 
// cerrar con tecla Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('activo')) {
    cerrarGaleria();
  }
});
