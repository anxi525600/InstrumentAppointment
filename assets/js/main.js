/**
* Template Name: Logis
* Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
* Updated: Jun 06 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      if (document.querySelector('.mobile-nav-active')) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      }
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll('.swiper').forEach(function(swiper) {
      let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
      new Swiper(swiper, config);
    });
  }
  window.addEventListener('load', initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

})();

 /**
   * password
   */

 function togglePasswordVisibility() {
  var passwordField = document.getElementById('password');
  var toggleIcon = document.getElementById('toggle-icon');

  if (passwordField.type === 'text') {
      passwordField.type = 'password';
      toggleIcon.src = 'assets/img/hidden.png'; 
  } else {
      passwordField.type = 'text';
      toggleIcon.src = 'assets/img/eye.png'; 
  }

  console.log("Password field type: " + passwordField.type);
  console.log("Icon src: " + toggleIcon.src);
}

document.addEventListener("DOMContentLoaded", function() {
  var passwordField = document.getElementById('password');
  var toggleIcon = document.getElementById('toggle-icon');

  passwordField.type = 'text';
  toggleIcon.src = 'assets/img/eye.png';

  console.log("Page loaded, password field type: " + passwordField.type); 
  console.log("Initial icon src: " + toggleIcon.src); 
});

/**
* info button
*/
function toggleEdit() {
var editableFields = document.querySelectorAll('.personal-data input');
var radioButtons = document.querySelectorAll('input[type="radio"]');
var submitButton = document.querySelector('.submit-button button');

if (submitButton.textContent === '提交') {
    editableFields.forEach(function(field) {
        field.setAttribute('disabled', true);
    });
    radioButtons.forEach(function(radio) {
        radio.setAttribute('disabled', true);
    });
    submitButton.textContent = '修改';

    var paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    if (paymentMethod === 'visa') {
        var visaPayment = document.querySelector('.visa-payment');
        var visaNumber = visaPayment.querySelector('input[name="visa-number"]');
        var visaMonth = visaPayment.querySelector('input[name="visa-month"]');
        var visaYear = visaPayment.querySelector('input[name="visa-year"]');
        var visaCvv = visaPayment.querySelector('input[name="visa-cvv"]');
        visaNumber.value = '**** **** **** ' + visaNumber.value.slice(-4);
        visaMonth.value = '**';
        visaYear.value = '**';
        visaCvv.value = '***';
    } else if (paymentMethod === 'transfer') {
        var transferPayment = document.querySelector('.transfer-payment');
        var accountNumber = transferPayment.querySelector('input[name="account-number"]');
        accountNumber.value = '**** **** **** ' + accountNumber.value.slice(-4);
    }
} else {
    editableFields.forEach(function(field) {
        field.removeAttribute('disabled');
    });
    radioButtons.forEach(function(radio) {
        radio.removeAttribute('disabled');
    });
    submitButton.textContent = '提交';
}
}

document.querySelectorAll('input[name="payment"]').forEach(function(radio) {
radio.addEventListener('change', function() {
    var visaPayment = document.querySelector('.visa-payment');
    var transferPayment = document.querySelector('.transfer-payment');
    if (this.value === 'visa') {
        visaPayment.style.display = 'block';
        transferPayment.style.display = 'none';
    } else if (this.value === 'transfer') {
        visaPayment.style.display = 'none';
        transferPayment.style.display = 'block';
    }
});
});

