// Script.js

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (let anchor of anchorLinks) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });
  
  // Toggle mobile menu
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  mobileMenuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });
  
  // Resume template selection
  const templateItems = document.querySelectorAll('.template');
  
  templateItems.forEach(function (item) {
    item.addEventListener('click', function () {
      templateItems.forEach(function (el) {
        el.classList.remove('selected');
      });
      this.classList.add('selected');
    });
  });
  
  // Form submission
  const contactForm = document.querySelector('form');
  
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    
    // Perform form validation
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
      alert('Please fill in all fields.');
      return;
    }
    
    // Submit the form data to the server (simulate here)
    alert('Form submitted successfully!');
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  });
  