let slide3=document.querySelector(".jsSlide3");
let img3=document.querySelectorAll(".jsSlide3 img");

let prev3=document.querySelector(".jsPB3");
let next3=document.querySelector(".jsNB3");

let size3=341;

slide3.style.transform="translateX("+(-size3*counter)+"px)";

next3.addEventListener("click",()=>{
    if(counter>=img3.length-1) return;
    slide3.style.transition="transform 0.6s ease-in-out";
    counter++;
    slide3.style.transform="translateX("+(-size3*counter)+"px)";
});

prev3.addEventListener("click",()=>{
    if(counter<=0) return;
    slide3.style.transition="transform 0.6s ease-in-out";
    counter--;
    slide3.style.transform="translateX("+(-size3*counter)+"px)";
});

slide3.addEventListener("transitionend",()=>{
    if(img3[counter].id==="lastClone3"){
        slide3.style.transition="none";
        counter=img3.length-2;
        slide3.style.transform="translateX("+(-size3*counter)+"px)";
    }
    if(img3[counter].id==="firstClone3"){
        slide3.style.transition="none";
        counter=img3.length-counter;
        slide3.style.transform="translateX("+(-size3*counter)+"px)";
    }
});
