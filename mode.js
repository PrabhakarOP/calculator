let modeBar=document.querySelector("#toggle");
let head=document.querySelector("head");
let light=document.querySelector("#light-mode");

modeBar.addEventListener("click",fun);

function fun(){
    if(light.parentElement== head){
        head.removeChild(light);
    }
    else
    head.appendChild(light);
}