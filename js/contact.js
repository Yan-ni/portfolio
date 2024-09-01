'use strict';

const PUBLIC_KEY = '6Xeg5iyGegdl3Uz9K';

emailjs.init(PUBLIC_KEY);

const contact_form = document.querySelector('.contact form');

contact_form.addEventListener('submit', function (event) {
  event.preventDefault();

  emailjs.sendForm('portfolio_mailer', 'contact_form', this)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Message sent!',
        text: 'Your message has been sent successfully.',
        customClass: {
          popup: 'popup',
          confirmButton: 'popup-button'
        }
      });
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Message not sent!',
        html: 'An error occurred.<br>But don\'t worry, you can contact me directly via email at <a href="mailto:contact@aniskh.com">contact@aniskh.com</a> and I will get back to you as soon as possible.',
        customClass: {
          popup: 'popup',
          confirmButton: 'popup-button'
        }
      });
    });
});