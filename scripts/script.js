// JavaScript Document

// Bron: https://dommagnifi.co/2016-05-16-basic-class-toggle-with-vanilla-js/
// Bron: https://stackoverflow.com/questions/52153424/how-to-use-event-listener-to-toggle-class-to-individual-list-item

// Toggle mobiele menu
document.getElementById("allerhande-menu-toggle").addEventListener("click", function() {
  document.getElementById("toggle-menu").classList.toggle('toggled');
});

// Overlay mobiele menu
document.getElementById("overlay-toggle").addEventListener("click", function() {
  document.getElementById("toggle-menu").classList.toggle('toggled');
});
