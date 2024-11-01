document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.contact');
  
  buttons.forEach(button => {
    console.log(button);
    button.addEventListener('click', whatsappRedirect);
  });

  function whatsappRedirect() {
    window.location.href = 'https://wa.me/5531999021418';
  }
});

  
  