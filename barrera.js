const mouth = document.querySelector('.mouth');
const eyes = document.querySelectorAll('.eye');
const eyebrows = document.querySelectorAll('.eyebrow');
const body = document.body;
const statusText = document.querySelector('.status-text');

// Función para alternar entre estados
function toggleMood(mood) {
  if (mood === 'happy') {
    mouth.classList.remove('angry');
    mouth.classList.add('happy');
    eyes.forEach(eye => eye.classList.remove('angry'));
    eyebrows.forEach(brow => brow.classList.remove('angry'));
    body.style.background = '#d0f0f4'; // Fondo claro
    statusText.textContent = 'Princesa feliz';
    statusText.style.color = '#333';
  } else if (mood === 'angry') {
    mouth.classList.remove('happy');
    mouth.classList.add('angry');
    eyes.forEach(eye => eye.classList.add('angry'));
    eyebrows.forEach(brow => brow.classList.add('angry'));
    body.style.background = '#2b2b2b'; // Fondo negro
    statusText.textContent = 'Princesa enojada 🤣';
    statusText.style.color = '#fff';
  }
}

// Alternar entre feliz y enojado cada 3 segundos
let isHappy = true;
setInterval(() => {
  isHappy = !isHappy;
  toggleMood(isHappy ? 'happy' : 'angry');
}, 3000);
