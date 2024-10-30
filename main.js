let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function setCurrentSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
  resetSlider();
}

function startSlider() {
  slideInterval = setInterval(nextSlide, 3000);
}

function stopSlider() {
  clearInterval(slideInterval);
}

function resetSlider() {
  stopSlider();
  startSlider();
}

document.getElementById("slider").addEventListener("mouseover", stopSlider);
document.getElementById("slider").addEventListener("mouseleave", startSlider);

window.onload = () => {
  showSlide(currentIndex); 
  startSlider();
};
