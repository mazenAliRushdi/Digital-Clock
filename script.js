const clockElement = document.querySelector('.clock');
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const instructionsElement = document.getElementById('instructions');

function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    timeElement.textContent = time;
    dateElement.textContent = date;
}

updateClock();
setInterval(updateClock, 1000);

clockElement.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    clockElement.style.backgroundColor = randomColor;
    clockElement.classList.add('color-changed');
    setTimeout(() => {
        clockElement.classList.remove('color-changed');
    }, 500);
});

timeElement.addEventListener('dblclick', () => {
    const fontFamilies = ['Arial', 'Verdana', 'Tahoma', 'Courier New', 'monospace'];
    const randomFont = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    timeElement.style.fontFamily = randomFont;
    timeElement.classList.add('font-changed');
    setTimeout(() => {
        timeElement.classList.remove('font-changed');
    }, 500);
});