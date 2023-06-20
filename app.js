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
  