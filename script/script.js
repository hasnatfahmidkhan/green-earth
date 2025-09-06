// navbar functionality for mobile
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const showNav = () => {
  mobileNav.classList.remove("right-[-200px]");
  mobileNav.classList.add("right-0");
  overlay.classList.remove("hidden");
};
const closeNav = () => {
  mobileNav.classList.add("right-[-200px]");
  mobileNav.classList.remove("right-0");
  overlay.classList.add("hidden");
};
