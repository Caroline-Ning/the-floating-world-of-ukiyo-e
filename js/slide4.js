let slide4=document.querySelector(".jsSlide4");
let img4=document.querySelectorAll(".jsSlide4 img");

let prev4=document.querySelector(".jsPB4");
let next4=document.querySelector(".jsNB4");


let size4=600;

slide4.style.transform="translateX("+(-size4*counter)+"px)";

next4.addEventListener("click",()=>{
    if(counter>=img4.length-1) return;
    slide4.style.transition="transform 0.6s ease-in-out";
    counter++;
    slide4.style.transform="translateX("+(-size4*counter)+"px)";
});

prev4.addEventListener("click",()=>{
    if(counter<=0) return;
    slide4.style.transition="transform 0.6s ease-in-out";
    counter--;
    slide4.style.transform="translateX("+(-size4*counter)+"px)";
});

slide4.addEventListener("transitionend",()=>{
    if(img4[counter].id==="lastClone4"){
        slide4.style.transition="none";
        counter=img4.length-2;
        slide4.style.transform="translateX("+(-size4*counter)+"px)";
    }
    if(img4[counter].id==="firstClone4"){
        slide4.style.transition="none";
        counter=img4.length-counter;
        slide4.style.transform="translateX("+(-size4*counter)+"px)";
    }
});
