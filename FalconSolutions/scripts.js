const elementos = document.querySelectorAll('.elemento-animado');

function verificarVisibilidade() {
  const alturaViewport = window.innerHeight;

  elementos.forEach(elemento => {
    const distanciaTopo = elemento.getBoundingClientRect().top;

    if (distanciaTopo < alturaViewport - 50) {
      elemento.classList.add('elemento-visivel');
    }
  });
}

window.addEventListener('scroll', verificarVisibilidade);
