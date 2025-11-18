// Show "Go to Top" button on scroll
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Scroll back to top when button pressed
topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
