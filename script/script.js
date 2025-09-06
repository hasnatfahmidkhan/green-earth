// Use Strict mode
"use strict";

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

// Main Features
const categoriesContainer = document.querySelector("#categoriesContainer");

// Function to load the category
const loadCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories"
  );
  const data = await res.json();
  const categories = data.categories;
  showCategory(categories);
};

// Function to display categories
const showCategory = (categories) => {
  categoriesContainer.innerHTML = `<li class="text-[#1F2937] hover:bg-green-700 hover:text-white rounded-md p-2 cursor-pointer ">All tress</li>`;
  console.log(categoriesContainer);
  // console.log(categories);
  categories.forEach((category) => {
    const categoryName = category.category_name;
    console.log(categoryName);
    categoriesContainer.innerHTML += `
            <li class="text-[#1F2937] hover:bg-green-700 hover:text-white rounded-md p-2 cursor-pointer">${categoryName}</li>
    `;
  });
};

// Call Load Category Function to load category
loadCategory();
