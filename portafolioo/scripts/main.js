const starfield = document.getElementById('starfield');

function createStars() {
    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${2 + Math.random() * 8}s`;
        starfield.appendChild(star);
    }
}

createStars();
