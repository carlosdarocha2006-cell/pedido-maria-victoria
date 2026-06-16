let currentScreen = 1;
const totalScreens = 6;

function next() {
    if (currentScreen < totalScreens) {
        document.querySelector(`#screen${currentScreen}`).classList.remove('active');
        currentScreen++;
        document.querySelector(`#screen${currentScreen}`).classList.add('active');
    }
}

function aceitou() {
    document.querySelector(`#screen${currentScreen}`).classList.remove('active');
    document.getElementById('final').style.display = 'flex';
    createHearts();
}

// "Não" button on screen 2 - runs away
document.getElementById('nao').addEventListener('click', function() {
    const button = this;
    const randomX = Math.random() * window.innerWidth * 0.7;
    const randomY = Math.random() * window.innerHeight * 0.7;
    
    button.style.position = 'fixed';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
    button.style.transition = 'all 0.3s ease';
});

// "Não" button on screen 6 - runs away
document.getElementById('nao2').addEventListener('click', function() {
    const button = this;
    const randomX = Math.random() * window.innerWidth * 0.7;
    const randomY = Math.random() * window.innerHeight * 0.7;
    
    button.style.position = 'fixed';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
    button.style.transition = 'all 0.3s ease';
});

// Create heart animation
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = -10 + 'px';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.opacity = '1';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }
}

// Add falling hearts animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
