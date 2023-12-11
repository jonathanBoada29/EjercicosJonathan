function agregarComentario() {
    var fechaHora = new Date();
    var fecha = fechaHora.toLocaleDateString();
    var hora = fechaHora.toLocaleTimeString();

    var comentarioTexto = `<!-- Comentario agregado el ${fecha} a las ${hora} -->`;

    var comentarioNode = document.createTextNode(comentarioTexto);

    var cuerpoDocumento = document.body;

    cuerpoDocumento.appendChild(comentarioNode);
  }