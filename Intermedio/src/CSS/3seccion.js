const caja = document.querySelector('.click');

caja.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth) * 10;
    const y = (event.clientY / window.innerHeight) * 10;

    caja.style.setProperty('--translate-x', x + 'px');
    caja.style.setProperty('--translate-y', y + 'px');
});