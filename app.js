// Function to smooth scroll to a target element
function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
  
  // Function to handle the click event of the "Get Started" button
  function handleGetStartedClick(event) {
    event.preventDefault();
    smoothScroll('#features');
  }
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.querySelector('.btn');
    getStartedBtn.addEventListener('click', handleGetStartedClick);
  });
  
// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const footer = document.querySelector('footer');
    const links = document.querySelectorAll('a');
  
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    
    links.forEach(link => {
      link.classList.toggle('dark-mode');
    });
  }
  
  // Event listener for the dark mode toggle button
  document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);
  });
  