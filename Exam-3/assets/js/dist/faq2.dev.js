"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Обробка другого акордеона (crypto-innovations)
  var cryptoFaqQuestions = document.querySelectorAll('.crypto-faq-question');
  var clickSound2 = new Audio('https://www.myinstants.com/media/sounds/click-2-151941.mp3'); // Звук для другого акордеона (опціонально)

  cryptoFaqQuestions.forEach(function (button) {
    button.addEventListener('click', function () {
      var answer = button.nextElementSibling;
      var isActive = button.classList.toggle('active');

      if (isActive) {
        clickSound2.play()["catch"](function (error) {
          return console.log('Помилка відтворення звуку для другого акордеона:', error);
        });
        answer.style.display = 'block';
        answer.style.maxHeight = '0';
        answer.style.opacity = '0';
        answer.style.overflow = 'hidden';
        setTimeout(function () {
          answer.style.maxHeight = answer.scrollHeight + 'px';
          answer.style.opacity = '1';
          answer.style.transition = 'max-height 0.5s ease-out, opacity 0.3s ease-in';
        }, 10);
      } else {
        answer.style.maxHeight = '0';
        answer.style.opacity = '0';
        answer.style.transition = 'max-height 0.5s ease-out, opacity 0.3s ease-out';
        setTimeout(function () {
          answer.style.display = 'none';
        }, 500);
      }

      button.style.transform = 'scale(1.05)';
      setTimeout(function () {
        button.style.transform = 'scale(1)';
      }, 200);
      button.style.backgroundColor = isActive ? '#4a387d' : '#3f2d6d';
      setTimeout(function () {
        button.style.backgroundColor = '#3f2d6d';
      }, 200); // Закриваємо інші відповіді в цьому акордеоні

      cryptoFaqQuestions.forEach(function (otherButton) {
        if (otherButton !== button && otherButton.classList.contains('active')) {
          var otherAnswer = otherButton.nextElementSibling;
          otherButton.classList.remove('active');
          otherAnswer.style.maxHeight = '0';
          otherAnswer.style.opacity = '0';
          otherAnswer.style.transition = 'max-height 0.5s ease-out, opacity 0.3s ease-out';
          setTimeout(function () {
            otherAnswer.style.display = 'none';
          }, 500);
        }
      });
    });
    button.addEventListener('mouseover', function () {
      button.style.backgroundColor = '#4a387d';
      button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseout', function () {
      if (!button.classList.contains('active')) {
        button.style.backgroundColor = '#3f2d6d';
        button.style.transform = 'scale(1)';
      }
    });
  });
});