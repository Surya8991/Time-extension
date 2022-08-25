setInterval(()=>{
const date=document.getElementById("date");
const time=document.getElementById("time");
let today= new Date;
date.textContent= today.toDateString();
time.textContent=today.toLocaleTimeString();
})