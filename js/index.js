const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Computer Scientist", "Software Engineer", "Programmer", "Developer","Copy & Paste Guru"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () =>{
		document.body.classList.remove('nav-open');
	})
})

function type() {
	if (charIndex < textArray[textArrayIndex].length) {
	  if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
	  typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
	  charIndex++;
	  setTimeout(type, typingDelay);
	} 
	else {
	  cursorSpan.classList.remove("typing");
		setTimeout(erase, newTextDelay);
	}
  }
  
  function erase() {
	  if (charIndex > 0) {
	  if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
	  typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
	  charIndex--;
	  setTimeout(erase, erasingDelay);
	} 
	else {
	  cursorSpan.classList.remove("typing");
	  textArrayIndex++;
	  if(textArrayIndex>=textArray.length) textArrayIndex=0;
	  setTimeout(type, typingDelay + 1100);
	}
  }
  
  document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
	if(textArray.length) setTimeout(type, newTextDelay + 250);
  });

  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
sr.reveal('.intro__img', {origin:'right', delay: 400})