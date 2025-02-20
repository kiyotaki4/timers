const jellyplay=document.getElementById("jellyplay")
let jellytimer=document.getElementById("jellytimer")
let time=24;
let timer;
let slark=document.getElementById("slark")
function startTimer(){
    if(!timer){
 timer = setInterval(()=>{
    jellytimer.style.color=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
    slark.style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
    time++;

    jellytimer.textContent=time;
},1000);}
jellytimer.classList.add("jellytimer")
}
jellyplay.addEventListener("click",startTimer);