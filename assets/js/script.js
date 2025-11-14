'use strict';



/**
 * #PRELOADING
 */

const loadElement = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  loadElement.classList.add("loaded");
});



/**
 * #MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNavbar);



/**
 *  #HEADER
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-go-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * #SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, x = revealElements.length; i < x; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);


/**
 * Ad Popup Script - Simplified Version
 * Shows ad when page loads and allows closing
 */

(function() {
  'use strict';
  
  // Configuration
  const CONFIG = {
      // Delay before showing popup (in milliseconds) - 1 second after loading circle is loaded
      showDelay: 1000, // 1 second after page load
      
      // Your website URL (update this!)
      targetUrl: 'http://globweb.globsoft.tech',
      
      // Your ad image URL (update this!)
      adImageUrl: 'assets/globweb.png',
      
      // Alt text for accessibility
      adImageAlt: 'Advertisement - Click to visit our website'
  };
  
  // DOM Elements
  let overlay, closeBtn, adLink, adImage;
  
  // Initialize popup
  function init() {
      // Wait for DOM to be fully loaded
      if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', setup);
      } else {
          setup();
      }
  }
  
  // Setup function
  function setup() {
      // Get DOM elements
      overlay = document.getElementById('adPopupOverlay');
      closeBtn = document.getElementById('adPopupClose');
      adLink = document.querySelector('.ad-popup-link');
      adImage = document.querySelector('.ad-popup-image');
      
      // Verify elements exist
      if (!overlay || !closeBtn || !adLink || !adImage) {
          console.error('Ad popup elements not found');
          return;
      }
      
      // Update link and image from config
      adLink.href = CONFIG.targetUrl;
      adImage.src = CONFIG.adImageUrl;
      adImage.alt = CONFIG.adImageAlt;
      
      // Setup event listeners
      setupEventListeners();
      
      // Show popup after delay (triggered when page loads)
      window.addEventListener('load', function() {
          setTimeout(showPopup, CONFIG.showDelay);
      });
  }
  
  // Setup event listeners
  function setupEventListeners() {
      // Close button click
      closeBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          closePopup();
      });
      
      // Close on overlay click (outside popup)
      overlay.addEventListener('click', function(e) {
          if (e.target === overlay) {
              closePopup();
          }
      });
      
      // Close on Escape key
      document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' && overlay.classList.contains('ad-popup-active')) {
              closePopup();
          }
      });
  }
  
  // Show popup
  function showPopup() {
      overlay.classList.add('ad-popup-active');
      document.body.classList.add('ad-popup-no-scroll');
      
      // Set focus to close button for accessibility
      setTimeout(() => {
          closeBtn.focus();
      }, 300);
  }
  
  // Close popup
  function closePopup() {
      overlay.classList.remove('ad-popup-active');
      document.body.classList.remove('ad-popup-no-scroll');
  }
  
  // Start initialization
  init();
  
})();