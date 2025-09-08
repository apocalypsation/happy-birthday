const container = document.querySelector('.lantern-container');
const audio = document.getElementById("bg-music");
const btn = document.getElementById("toggle-sound");

// Generate floating lanterns
for (let i = 0; i < 25; i++) {
  const lantern = document.createElement('div');
  lantern.classList.add('lantern');

  // Randomize placement & speed
  lantern.style.left = Math.random() * 100 + 'vw';
  lantern.style.animationDuration = (6 + Math.random() * 6) + 's';
  lantern.style.opacity = 0.5 + Math.random() * 0.5;

  container.appendChild(lantern);
}

// Handle autoplay restrictions
document.body.addEventListener("click", () => {
  audio.play().catch(err => console.log("Autoplay blocked"));
}, { once: true });

// Toggle music
btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = "🔊 Music On";
  } else {
    audio.pause();
    btn.textContent = "🔇 Music Off";
  }
});
