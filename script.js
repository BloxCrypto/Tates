document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('formResult').textContent = 'Message received!';
  this.reset();
});

const bgm = document.getElementById('bgm');
const muteBtn = document.getElementById('muteBtn');

muteBtn.addEventListener('click', ()=>{
  bgm.muted = !bgm.muted;
  muteBtn.textContent = bgm.muted ? '🔇' : '🔊';
});
