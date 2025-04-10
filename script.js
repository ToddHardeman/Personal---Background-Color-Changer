const button = document.getElementById('button');
const body = document.body;

function changeBackgroundColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    body.style.backgroundcolor = randomColor;
}
button.addEventListener('click', changeBackgroundColor);