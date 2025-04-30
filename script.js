document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  });

  const texts = [
    "Currently, I'm a student in the 12th grade.",
    "I'm on a journey to master programming.",
    "Actually.",
    "It was all part of my plan.",
    "Wait For The Countdown to end."
  ];
  
  const delay = 50; // Change this to set the interval (in milliseconds) between typing each character
  const textElement = document.getElementById('text');
  const cursorElement = document.createElement('span');
  cursorElement.className = 'cursor';
  cursorElement.innerText = '|';
  textElement.appendChild(cursorElement);
  
  let textIndex = 0;
  let charIndex = 0;
  
  function type() {
    const text = texts[textIndex];
    if (charIndex <= text.length) {
      const displayText = text.substring(0, charIndex);
      textElement.innerText = displayText;
      textElement.appendChild(cursorElement);
      charIndex++;
      setTimeout(type, delay);
    } else {
      // Move to the next text after a delay
      textIndex = (textIndex + 1) % texts.length;
      charIndex = 0;
      setTimeout(type, 2000); // Change the delay between texts as needed
    }
  }
  
  // Start the typing process
  type();
  
// countdown.js

// Set your fixed reveal date/time here
const end = new Date("2026-01-27T12:00:00"); // YYYY-MM-DDTHH:MM:SS (24-hour format)

function upd() {
  const diff = end - new Date();
  
  if (diff <= 0) {
    document.getElementById('timer').textContent = "It's time! 🎉";
    return;
  }

  const d = Math.floor(diff / (24 * 60 * 60 * 1000));
  const h = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const m = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  const s = Math.floor((diff % (60 * 1000)) / 1000);

  document.getElementById('timer').textContent =
    `${d}d : ${h}h : ${m}m : ${s}s`;
}

upd();
setInterval(upd, 1000);
