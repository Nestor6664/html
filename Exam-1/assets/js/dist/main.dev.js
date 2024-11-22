"use strict";

setTimeout(function () {
  var element = document.getElementById('myElement');
  element.classList.remove('visible');
  element.classList.add('hidden');
}, 3000); // 3000 мс = 3 секунди