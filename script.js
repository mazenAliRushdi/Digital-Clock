const clockElement = document.querySelector('.clock');
const timeElement = document.getElementById('time');

function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    timeElement.textContent = time;
    clockElement.setAttribute('data-date', date);
}

updateClock();
setInterval(updateClock, 1000);

clockElement.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    clockElement.style.backgroundColor = randomColor;
    clockElement.classList.add('color-changed'); // إضافة فئة لتغيير اللون
    setTimeout(() => {
        clockElement.classList.remove('color-changed'); // إزالة الفئة بعد فترة
    }, 500);
});

timeElement.addEventListener('dblclick', () => {
    const fontFamilies = ['Arial', 'Verdana', 'Tahoma', 'Courier New', 'monospace'];
    const randomFont = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    timeElement.style.fontFamily = randomFont;
    timeElement.classList.add('font-changed'); // إضافة فئة لتغيير الخط
    setTimeout(() => {
        timeElement.classList.remove('font-changed'); // إزالة الفئة بعد فترة
    }, 500);
});