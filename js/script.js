var toggle = document.querySelector(".modal-window-toggle-btn");
var popup = document.querySelector(".modal-window");

toggle.addEventListener("click", function(event) {
 event.preventDefault();
 popup.classList.toggle("modal-window-show");
});

window.addEventListener("keydown", function(event) {
 if (event.keyCode === 27) {
   if (popup.classList.contains("modal-window-show")) {
     popup.classList.remove("modal-window-show");
   }
 }
});
