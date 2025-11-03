const title = document.createElement('h1');
title.textContent = 'Virtual Drum Kit';

const drumContainer = document.createElement('div');
drumContainer.className = 'drum-container';
drumContainer.id = 'drum-container';

document.body.appendChild(title);
document.body.appendChild(drumContainer);

const drums = [
  { key: 'A', sound: 'Kick', file: './sounds/kick_drum_hard_3.wav' },
  { key: 'S', sound: 'Snare', file: './sounds/snare2.wav' },
  { key: 'D', sound: 'Hi-Hat', file: './sounds/hi-hat.wav' },
  { key: 'F', sound: 'Tom', file: './sounds/tom.wav' },
  { key: 'G', sound: 'Clap', file: './sounds/clap.wav' },
  { key: 'H', sound: 'Crash', file: './sounds/crash.wav' },
  { key: 'J', sound: 'Ride', file: './sounds/ride.wav' },
];

drums.forEach(drum => {
  const button = document.createElement('button');
  button.className = 'drum';
  button.textContent = `${drum.key}-${drum.sound}`;
  button.dataset.key = drum.key;
  button.dataset.sound = drum.file;
  drumContainer.appendChild(button);

  button.addEventListener('click', () => playSound(drum.file));
});

function playSound(soundPath) {
  const audio = new Audio(soundPath);
  audio.currentTime = 0;
  audio.play().catch(err => console.log('Audio play error:', err));;
}
drumContainer.addEventListener('click', e => {
  if (!e.target.classList.contains('drum')) return;
  const soundPath = e.target.dataset.sound;
  playSound(soundPath);

})
function flashButton(key) {
  const button = document.querySelector(`[data-key="${key.toUpperCase()}"]`);
  if (!button) return;
  button.classList.add('active');
  setTimeout(() => button.classList.remove('active'), 150);
}
document.addEventListener('keydown', e => {
  const drum = drums.find(d => d.key === e.code.replace('Key', ''));
  if (drum) {
    playSound(drum.file);
    flashButton(drum.key);
  }
})
/*---- hi ---*/