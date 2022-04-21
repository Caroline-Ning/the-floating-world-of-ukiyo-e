let slide2=document.querySelector(".jsSlide2");
let img2=document.querySelectorAll(".jsSlide2 img");

let prev2=document.querySelector(".jsPB2");
let next2=document.querySelector(".jsNB2");

let size2=382;

slide2.style.transform="translateX("+(-size2*counter)+"px)";

next2.addEventListener("click",()=>{
    if(counter>=img2.length-1) return;
    slide2.style.transition="transform 0.6s ease-in-out";
    counter++;
    slide2.style.transform="translateX("+(-size2*counter)+"px)";
});

prev2.addEventListener("click",()=>{
    if(counter<=0) return;
    slide2.style.transition="transform 0.6s ease-in-out";
    counter--;
    slide2.style.transform="translateX("+(-size2*counter)+"px)";
});

slide2.addEventListener("transitionend",()=>{
    if(img2[counter].id==="lastClone2"){
        slide2.style.transition="none";
        counter=img2.length-2;
        slide2.style.transform="translateX("+(-size2*counter)+"px)";
    }
    if(img2[counter].id==="firstClone2"){
        slide2.style.transition="none";
        counter=img2.length-counter;
        slide2.style.transform="translateX("+(-size2*counter)+"px)";
    }
});
