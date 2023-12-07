function showImage(imageSrc, description) {
  const fullImage = document.getElementById('fullImage');
  const imageDescription = document.getElementById('imageDescription');

  fullImage.style.display = 'flex';
  fullImage.getElementsByTagName('img')[0].src = imageSrc;
  imageDescription.textContent = description;
}

function hideImage() {
  const fullImage = document.getElementById('fullImage');
  fullImage.style.display = 'none';
}