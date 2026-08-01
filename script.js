// Typing Animation

const text = [
    "BCA Student",
    "Web Developer",
    "Backend Developer",
    "Frontend Developer"
];

let index = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeText() {

    if (charIndex < text[index].length) {

        typing.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,100);

    }
    else{

        setTimeout(eraseText,1500);

    }

}

function eraseText(){

    if(charIndex>0){

        typing.textContent=text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseText,50);

    }

    else{

        index++;

        if(index>=text.length){

            index=0;

        }

        setTimeout(typeText,300);

    }

}

typeText();



// Scroll Animation

const hiddenElements=document.querySelectorAll(".hidden");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el=>observer.observe(el));



//  Contact Form

// function showMessage(){

//     alert("Thank you! Your message has been received.");

// }


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

function setActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (
            window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight
        ) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);