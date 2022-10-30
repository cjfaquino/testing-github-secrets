import './style.css';

const h1 = document.querySelector('h1');
h1.textContent = `${process.env.TEST}`;
console.log(process.env.TEST);
