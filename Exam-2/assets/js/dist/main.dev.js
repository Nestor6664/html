"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".slide");
  var dotsContainer = document.querySelector(".dots");
  var currentSlide = 0;

  var createDots = function createDots() {
    slides.forEach(function (_, index) {
      var dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === currentSlide) dot.classList.add("active");
      dot.addEventListener("click", function () {
        return goToSlide(index);
      });
      dotsContainer.appendChild(dot);
    });
  };

  var goToSlide = function goToSlide(index) {
    slides[currentSlide].classList.remove("active");
    dotsContainer.children[currentSlide].classList.remove("active");
    currentSlide = index;
    slides[currentSlide].classList.add("active");
    dotsContainer.children[currentSlide].classList.add("active");
  };

  createDots();
  slides[currentSlide].classList.add("active");
});