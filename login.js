document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section .content');
  
    sections.forEach((section) => {
      // Fade in effect
      setTimeout(() => {
        section.classList.add('show');
      }, 500); // Adjust delay as needed
    });
  });
  