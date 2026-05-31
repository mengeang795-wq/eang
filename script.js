// SLIDER AUTO CHANGE
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(showSlide, 3000);

// ALERT BUTTON
function showAlert() {
  alert("Thank you! We will contact you soon ☕️");
}