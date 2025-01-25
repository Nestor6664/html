   document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots");
    let currentSlide = 0;


    const createDots = () => {
      slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === currentSlide) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });
    };

    const goToSlide = (index) => {
      slides[currentSlide].classList.remove("active");
      dotsContainer.children[currentSlide].classList.remove("active");
      currentSlide = index;
      slides[currentSlide].classList.add("active");
      dotsContainer.children[currentSlide].classList.add("active");
    };

    createDots();
    slides[currentSlide].classList.add("active");
  });

