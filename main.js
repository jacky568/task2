// script.js

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideIntervalTime = 3000; // 3 ثواني
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
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

function startSlider() {
  slideInterval = setInterval(nextSlide, slideIntervalTime);
}

function stopSlider() {
  clearInterval(slideInterval);
}

document.getElementById("slider").addEventListener("mouseenter", stopSlider);
document.getElementById("slider").addEventListener("mouseleave", startSlider);

window.onload = startSlider;
