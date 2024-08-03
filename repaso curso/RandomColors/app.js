const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    h1.style.color = invertColor(newColor);
    button.style.backgroundColor = newColor;
    button.style.color = invertColor(newColor);
});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};

const invertColor = (rgb) => {
    const rgbValues = rgb.match(/\d+/g).map(Number);
    const r = 255 - rgbValues[0];
    const g = 255 - rgbValues[1];
    const b = 255 - rgbValues[2];
    return `rgb(${r}, ${g}, ${b})`;
};
