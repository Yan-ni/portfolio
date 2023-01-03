'use strict';

const PUBLIC_KEY = '6Xeg5iyGegdl3Uz9K';

emailjs.init(PUBLIC_KEY);

const contact_form = document.querySelector('.contact form');

contact_form.addEventListener('submit', function (event) {
  event.preventDefault();

  const form_data = new FormData(this);

  emailjs.sendForm('portfolio_mailer', 'contact_form', this)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Message Envoyé',
        text: 'Votre message a bien été envoyé.',
        customClass: {
          popup: 'popup',
          confirmButton: 'popup-button'
        }
      });
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Message NON Envoyé',
        html: 'Une erreur est survenue.<br>Je vous prie de me contacter directement sur : <a href="mailto:contact@aniskh.com">contact@aniskh.com</a>',
        customClass: {
          popup: 'popup',
          confirmButton: 'popup-button'
        }
      });
    });
});