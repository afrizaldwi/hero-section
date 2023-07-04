/** @format */

const navbarCollapse = document.getElementById("navbarCollapse");
const navbarClose = document.getElementById("navbarClose");
const navbarNav = document.getElementById("navbarNav");

navbarCollapse.addEventListener("click", () => {
	navbarNav.classList.toggle("toggle");
});
navbarClose.addEventListener("click", () => {
	navbarNav.classList.toggle("toggle");
});
