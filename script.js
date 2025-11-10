document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('formResult').textContent = 'Thanks! Your message was sent.';
  this.reset();
});