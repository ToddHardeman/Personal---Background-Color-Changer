const button = document.getElementById('button');
const body = document.body;

function changeBackgroundColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    body.style.backgroundImage = `linear-gradient(to right, black, ${randomColor})`;
}
button.addEventListener('click', changeBackgroundColor);