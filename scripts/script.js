const title = document.createElement('h1');
title.textContent = 'Virtual Drum Kit';

const drumContainer = document.createElement('div');
drumContainer.className = 'drum-container';
drumContainer.id = 'drum-container';

document.body.appendChild(title);
document.body.appendChild(drumContainer);

const drums = [
  { key: 'A', sound: 'Kick' },
  { key: 'S', sound: 'Snare' },
  { key: 'D', sound: 'Hi-Hat' },
  { key: 'F', sound: 'Tom' },
  { key: 'G', sound: 'Clap' },
  { key: 'H', sound: 'Crash' },
  { key: 'J', sound: 'Ride' },
];

drums.forEach(drum => {
  const button = document.createElement('button');
  button.className = 'drum';
  button.textContent = `${drum.key}-${drum.sound}`;
  button.dataset.key = drum.key;
  drumContainer.appendChild(button);
});
