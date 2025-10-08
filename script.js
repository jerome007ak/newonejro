function startSurprise() {
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';

  // Start background music
  document.getElementById('bg-music').play();

  // Start confetti
  startConfetti();

  // Start slideshow
  startSlideshow();
}

function revealSurprise() {
  document.getElementById('surprise').style.display = 'block';
}

// Slideshow
let slideIndex = 0;
function startSlideshow() {
  const slides = document.getElementsByClassName('slide');
  for (let slide of slides) {
    slide.style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(startSlideshow, 3000);
}

// Confetti
function startConfetti() {
  const confettiSettings = { target: 'confetti-canvas' };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}
