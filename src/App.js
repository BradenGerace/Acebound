// App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Acebound</h1>
        <p>Professional business solutions.</p>
        <link rel="stylesheet" href="App.css" />
      </header>

      <nav className="nav">
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main className="main">
        <section id="hero" className="hero">
          <div className="container">
            <h2>Build Your Professional Identity</h2>
            <p>Impress recruiters with stunning resumes & portfolios.</p>
            <a href="#features" className="cta-button">Get Started</a>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h2>Features</h2>
            <div className="feature">
              <img src="feature1-icon.png" alt="Feature 1" />
              <h3>Beautiful Resumes</h3>
              <p>Create eye-catching resumes with our professionally designed templates.</p>
            </div>
            <div className="feature">
              <img src="feature2-icon.png" alt="Feature 2" />
              <h3>Easy Customization</h3>
              <p>Customize your resume with ease using our intuitive editor.</p>
            </div>
            <div className="feature">
              <img src="feature3-icon.png" alt="Feature 3" />
              <h3>Secure and Reliable</h3>
              <p>Rest assured that your data is safe and your resume is always accessible.</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing">
          <div className="container">
            <h2>Pricing</h2>
            <div className="pricing-option">
              <div className="pricing-option-header">
                <h3>Basic</h3>
                <p>$19.99</p>
              </div>
              <ul>
                <li>1 Resume</li>
                <li>Basic Support</li>
              </ul>
              <a href="#" className="cta-button">Select</a>
            </div>
            <div className="pricing-option">
              <div className="pricing-option-header">
                <h3>Pro</h3>
                <p>$39.99</p>
              </div>
              <ul>
                <li>3 Resumes</li>
                <li>Priority Support</li>
                <li>Custom Domains</li>
              </ul>
              <a href="#" className="cta-button">Select</a>
            </div>
            <div className="pricing-option">
              <div className="pricing-option-header">
                <h3>Enterprise</h3>
                <p>Contact us</p>
              </div>
              <ul>
                <li>Unlimited Resumes</li>
                <li>Premium Support</li>
                <li>Advanced Analytics</li>
              </ul>
              <a href="#" className="cta-button">Contact Us</a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>Contact Us</h2>
            <p>Have any questions? Feel free to reach out to us:</p>
            <form>
              <input type="text" name="name" placeholder="Your Name" />
              <input type="email" name="email" placeholder="Your Email" />
              <textarea name="message" placeholder="Your Message"></textarea>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Acebound. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
