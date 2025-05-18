const startTime = Date.now();

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    const loadDuration = Date.now() - startTime;
    const minDuration = 1000; /*2 segundos de duração minima*/
    const delay = Math.max(minDuration - loadDuration, 0);

    setTimeout(() => {
        preloader.classList.add('fade-out');
        
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500); // igual ao tempo da transição no CSS
      }, delay);
});