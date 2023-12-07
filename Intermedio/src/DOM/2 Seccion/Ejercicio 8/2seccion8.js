let comments = [
    '¡Esto es genial!',
    '¡Me encanta!',
    'Buena idea.'
  ];

  function displayComments() {
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
      const commentElement = document.createElement('div');
      commentElement.textContent = comment;
      commentsContainer.appendChild(commentElement);
    });
  }

  function addComment() {
    const newComment = document.getElementById('newComment').value;
    if (newComment !== '') {
      comments.push(newComment);
      displayComments();
      document.getElementById('newComment').value = '';
    } else {
      alert('Por favor, escribe un comentario antes de agregarlo.');
    }
  }

  displayComments();