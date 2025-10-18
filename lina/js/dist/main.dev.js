"use strict";

onload = function onload() {
  var c = setTimeout(function () {
    document.body.classList.remove("not-loaded");
    var titles = 'I LOVE U LINA'.split('');
    var titleElement = document.getElementById('title');
    var index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();
    clearTimeout(c);
  }, 1000);
};