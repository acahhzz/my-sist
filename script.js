// Audio will autoplay
const audio = document.getElementById('birthday-song');
const confettiBtn = document.getElementById('confetti-btn');
const confettiContainer = document.getElementById('confetti-container');
const peti = document.getElementById('harta-karun');
const gallery = document.querySelector('.gallery');

// Autoplay audio when possible
document.addEventListener('DOMContentLoaded', () => {
    audio.play().catch(e => console.log('Autoplay prevented:', e));
});


// Confetti effect
confettiBtn.addEventListener('click', () => {
    createConfetti();
});


function createConfetti() {
    // Clear existing confetti
    confettiContainer.innerHTML = '';

    // Create new confetti
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Random position and styles
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;

        confettiContainer.appendChild(confetti);
    }
}

function getRandomColor() {
    const colors = ['#FF577F', '#FF884B', '#FFD384', '#FFF9B0', '#7D5A5A'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Auto-start confetti on page load
window.addEventListener('load', () => {
    setTimeout(createConfetti, 1000);
});

peti.addEventListener('click', () => {
    console.log('testes')
    const message = document.createElement('div');
    gallery.appendChild(message);
    message.classList.add('text')

    const img = document.createElement('img')
    img.src = 'asset/text.png'

    message.appendChild(img);

    const close = document.createElement('button');
    close.innerText = 'X';
    close.classList.add('close');

    close.addEventListener('click', () => {
        message.remove();
    });

    message.appendChild(close);
});