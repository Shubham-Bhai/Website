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
    "Currently, I'm a student in the 11th grade.",
    "I'm on a journey to master programming.",
    "Despite my skill level, I enjoy playing chess."
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
  
