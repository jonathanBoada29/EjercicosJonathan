var elementos = document.querySelectorAll('.elemento');

    elementos.forEach(function(elemento) {
      var colorOriginal = elemento.style.backgroundColor;

      elemento.addEventListener('mouseover', function() {
        elemento.style.backgroundColor = 'lightgreen'; 
      });

      elemento.addEventListener('mouseout', function() {
        elemento.style.backgroundColor = colorOriginal; 
      });
    });