"use strict";

document.querySelectorAll(".faq-question").forEach(function (button) {
  button.addEventListener("click", function () {
    var answer = this.nextElementSibling;
    var icon = this.querySelector(".icon");
    document.querySelectorAll(".faq-answer").forEach(function (el) {
      if (el !== answer) {
        el.style.maxHeight = null;
        el.previousElementSibling.querySelector(".icon").textContent = "+";
      }
    });

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.textContent = "+";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "-";
    }
  });
});