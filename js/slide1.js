let slide=document.querySelector(".jsSlide1");
let img=document.querySelectorAll(".jsSlide1 img");

let prev=document.querySelector(".jsPB1");
let next=document.querySelector(".jsNB1");

let counter=1;
let size=img[0].clientWidth;


slide.style.transform="translateX("+(-size*counter)+"px)";

next.addEventListener("click",()=>{
    if(counter>=img.length-1) return;
    slide.style.transition="transform 0.6s ease-in-out";
    counter++;
    slide.style.transform="translateX("+(-size*counter)+"px)";
});

prev.addEventListener("click",()=>{
    if(counter<=0) return;
    slide.style.transition="transform 0.6s ease-in-out";
    counter--;
    slide.style.transform="translateX("+(-size*counter)+"px)";
});

slide.addEventListener("transitionend",()=>{
    if(img[counter].id==="lastClone"){
        slide.style.transition="none";
        counter=img.length-2;
        slide.style.transform="translateX("+(-size*counter)+"px)";
    }
    if(img[counter].id==="firstClone"){
        slide.style.transition="none";
        counter=img.length-counter;
        slide.style.transform="translateX("+(-size*counter)+"px)";
    }
});