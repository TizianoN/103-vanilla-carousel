// # DICHIARO L'ARRAY DI SLIDES
const slides = [
  './img/01.jpg', // INDICE 0
  './img/02.png', // INDICE 1
  './img/03.jpg', // INDICE 2
  './img/04.jpg', // INDICE 3
  './img/05.jpg', // INDICE 4
  './img/06.jpg', // INDICE 5
];

// # RECUPERO GLI ELEMENTI DI INTERESSE
const slidesContainer = document.getElementById('slides-container');
const prevButton = document.getElementById('go-prev');
const nextButton = document.getElementById('go-next');

// # DICHIARO LA SLIDE ATTIVA
let activeSlide = 0;

// # AGGIUNGO DINAMICAMENTE LE SLIDES AL CONTAINER
let slidesHTML = '';

for (let i = 0; i < slides.length; i++) {
  const slideUrl = slides[i];

  let active = i == activeSlide ? 'active' : '';

  slidesHTML += `
  <div class="slide ${active}">
    <img src="${slideUrl}" alt="" />
  </div>`;
}

slidesContainer.innerHTML = slidesHTML;

// # PULSANTE NEXT
nextButton.addEventListener('click', function () {
  // # RECUPERO L'ARRAY DI TUTTE LE SLIDES
  const allSlidesEl = document.querySelectorAll('.slide');

  // # RECUPERO LA SLIDE ATTIVA E RIMUOVO LA CLASSE ACTIVE
  const activeSlideEl = allSlidesEl[activeSlide];
  activeSlideEl.classList.toggle('active');

  // # INCREMENTO LA SLIDE ATTIVA (perché è next)
  activeSlide++;

  // # SE ABBIAMO SUPERATO IL RANGE DELL'ARRAY TORNIAMO ALLA PRIMA SLIDE
  if (activeSlide >= allSlidesEl.length) {
    activeSlide = 0;
  }

  // # RECUPERO LA NUOVA SLIDE ATTIVA E AGGIUNGO LA CLASSE ACTIVE
  const newActiveSlide = allSlidesEl[activeSlide];
  newActiveSlide.classList.toggle('active');
});

// # PULSANTE PREV
prevButton.addEventListener('click', function () {
  // # RECUPERO L'ARRAY DI TUTTE LE SLIDES
  const allSlidesEl = document.querySelectorAll('.slide');

  // # RECUPERO LA SLIDE ATTIVA E RIMUOVO LA CLASSE ACTIVE
  const activeSlideEl = allSlidesEl[activeSlide];
  activeSlideEl.classList.toggle('active');

  // # DECREMENTO LA SLIDE ATTIVA (perché è prev)
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = allSlidesEl.length - 1;
  }

  // # RECUPERO LA NUOVA SLIDE ATTIVA E AGGIUNGO LA CLASSE ACTIVE
  const newActiveSlide = allSlidesEl[activeSlide];
  newActiveSlide.classList.toggle('active');
});
