document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStyle = document.getElementById('theme-style');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            themeStyle.href = 'light-theme.css';
        } else {
            body.classList.add('dark-mode');
            themeStyle.href = 'dark-theme.css';
        }
    });
});

const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
console.log(lightboxImage,lightbox)
gallery.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        lightboxImage.src = imgSrc;
        lightbox.style.display = 'block';
        
    }); 
});

function closeLightbox() {
    lightbox.style.display = 'none'; 
}




