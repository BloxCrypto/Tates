document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('formResult').textContent = 'Message received!';
  this.reset();
});