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

// Landing screen enter effect
document.body.classList.remove('loaded');

const landing = document.getElementById('landing');
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', ()=>{
  landing.style.opacity = '0';
  landing.style.transition = 'opacity 1s ease';
  setTimeout(()=>{
    landing.style.display='none';
    document.body.classList.add('loaded');
  },1000);
});
