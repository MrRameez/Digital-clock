const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const day = document.querySelector('#day');

let monthName = [
    "January",
    "February", 
    "March", 
    "April", 
    "May", 
    "June",
    "July", 
    "August", 
    "September",
    "October", 
    "November", 
    "December"
];

const clock = setInterval(function time() {
    let today = new Date();

    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    let hour12 = h % 12 || 12;

    day.innerHTML = `${d} ${monthName[m]} ${y}`
    hour.innerHTML = hour12 < 10 ? '0' + hour12 : hour12;
    minute.innerHTML = min < 10 ? '0' + min : min; 
    second.innerHTML = sec < 10 ? '0' + sec : sec; 
}, 1000);
