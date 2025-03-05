"use strict";

var clients = [{
  name: "Steve Smith",
  role: "CEO, Telecom",
  feedback: "Crypto has revolutionized the way we think about finance.The future of finance is decentralized and transparent",
  image: "assets/images/team-1.jpg"
}, {
  name: "John Doe",
  role: "Marketing Director",
  feedback: "Blockchain technology is the future of secure data storage. It's transforming the way we store and manage information",
  image: "assets/images/team-2.jpg"
}, {
  name: "Emily Johnson",
  role: "Product Manager",
  feedback: "The potential for cryptocurrency to disrupt traditional banking is vast. It's a game-changer for financial inclusion",
  image: "assets/images/team-3.jpg"
}, {
  name: "Sarah Brown",
  role: "Software Engineer",
  feedback: "The decentralized nature of blockchain is a game-changer for cybersecurity. It's a must-have for secure digital assets",
  image: "assets/images/team-4.jpg"
}];
var currentIndex = 0;

function updateSlide() {
  document.getElementById("client-name").textContent = clients[currentIndex].name;
  document.getElementById("client-role").textContent = clients[currentIndex].role;
  document.getElementById("client-feedback").textContent = clients[currentIndex].feedback;
  document.getElementById("main-image").src = clients[currentIndex].image;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % clients.length;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + clients.length) % clients.length;
  updateSlide();
}

function changeSlide(index) {
  currentIndex = index;
  updateSlide();
}

updateSlide();