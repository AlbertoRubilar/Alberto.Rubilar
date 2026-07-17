/*=========================================
    ALBERTO RUBILAR PORTFOLIO
    main.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initHeader();

    initReveal();

    initCounters();

    initParallax();

});


/*=========================================
    HEADER
=========================================*/

function initHeader(){

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 60){

            header.style.background="rgba(7,17,31,.95)";

            header.style.boxShadow="0 15px 35px rgba(0,0,0,.35)";

        }else{

            header.style.background="rgba(7,17,31,.70)";

            header.style.boxShadow="none";

        }

    });

}


/*=========================================
    REVEAL ANIMATION
=========================================*/

function initReveal(){

    const elements=document.querySelectorAll(

        ".stat,.skill,.project,.about-card,.contact-card"

    );

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    elements.forEach(el=>{

        el.classList.add("hidden");

        observer.observe(el);

    });

}


/*=========================================
    COUNTERS
=========================================*/

function initCounters(){

    const numbers=document.querySelectorAll(".stat h3");

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            animate(entry.target);

            observer.unobserve(entry.target);

        });

    });

    numbers.forEach(n=>observer.observe(n));

}


function animate(el){

    const original=el.innerText;

    const value=parseInt(original.replace(/\D/g,""));

    const suffix=original.replace(/[0-9]/g,"");

    let current=0;

    const step=Math.max(1,Math.floor(value/80));

    const timer=setInterval(()=>{

        current+=step;

        if(current>=value){

            current=value;

            clearInterval(timer);

        }

        el.innerText=current.toLocaleString("es-CL")+suffix;

    },18);

}


/*=========================================
    PARALLAX
=========================================*/

function initParallax(){

    const bg=document.querySelector(".background");

    window.addEventListener("mousemove",(e)=>{

        const x=(e.clientX/window.innerWidth-.5)*20;

        const y=(e.clientY/window.innerHeight-.5)*20;

        bg.style.transform=

        `translate(${x}px,${y}px)`;

    });

}
