const container = document.querySelector('.lantern-container');

// Generate multiple lanterns
for (let i = 0; i < 20; i++) {
  const lantern = document.createElement('div');
  lantern.classList.add('lantern');

  // Random positions & timing
  lantern.style.left = Math.random() * 100 + 'vw';
  lantern.style.animationDuration = (5 + Math.random() * 5) + 's';
  lantern.style.opacity = Math.random();

  container.appendChild(lantern);
}
