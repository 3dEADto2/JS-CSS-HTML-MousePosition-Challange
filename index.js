const xEl = document.querySelector('.x-axis p');
const yEl = document.querySelector('.y-axis p');

window.addEventListener('mousemove', (event) => {
    const xPercent = window.innerWidth / 100;
    const yPercent = window.innerHeight / 100;

    xEl.innerText = Math.round(event['clientX'] / xPercent);
    yEl.innerText = Math.round(event['clientY'] / yPercent);
});