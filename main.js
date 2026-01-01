

const hamburger = document.getElementById("hamburger");
const navlist = document.getElementById("navlist");

if (hamburger && navlist) {
  hamburger.addEventListener("click", ()=> {
      navlist.classList.toggle("open");
  });
}

// image slider
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

function showSlide(index) {
  const offset = -index * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}


// navbar on mobile

const apartmentLink = document.querySelector(".navlist > li:nth-child(2) > a");
const dropdown = document.querySelector(".dropdown");

apartmentLink.addEventListener("click", function (e) {
  if (window.innerWidth <= 700) {
    e.preventDefault();
    dropdown.classList.toggle("open");
  }
});

// New snippet to allow proper dropdown scrolling on mobile
dropdown.addEventListener('touchstart', function (e) {
  e.stopPropagation();
}, { passive: false });

dropdown.addEventListener('touchmove', function (e) {
  e.stopPropagation();
}, { passive: false });


// Search Input

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const query = this.value.toLowerCase();

    const apartments = document.querySelectorAll(".scndapartment a, .thirdapartment a, .fourthapartment a");

    apartments.forEach(apartment => {
      const text = apartment.textContent.toLowerCase();
      apartment.style.display = text.includes(query) ? "" : "none";
    });

    const pages = document.querySelectorAll(".product-page");
    pages.forEach(page => {
      const visibleApts = page.querySelectorAll("a");
      const hasVisible = Array.from(visibleApts).some(apt => apt.style.display !== "none");
      page.style.display = hasVisible ? "" : "none";
    });
  });
}


// Scroll button
const scrollBtn = document.querySelector(".ourapartments button");

if (scrollBtn) {
  scrollBtn.addEventListener("click", function() {
      document.getElementById("apartmentsSection").scrollIntoView({
          behavior: "smooth"
      });
  });
}


// Products Pagination
document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll('.product-page');
  const pageButtons = document.querySelectorAll('.pageone');

  if (pages.length && pageButtons.length) {
    pageButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {

  
        pages.forEach(p => p.classList.remove('active'));
        const activePage = pages[index];
        activePage.classList.add('active');

      
        pageButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

  
        activePage.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  }
});






// formbooking
flatpickr("#bookingCalendar", {
  inline: true,
  mode: "range",
  minDate: new Date().fp_incr(1), 
  dateFormat: "y-m-d"
});

// body background color
const bodyColor = document.getElementById("apartmentonebody").style.backgroundColor = "#FFFFFF"


// booking submission
const bookingInput = document.getElementById("bookingCalendar");
const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", function () {
    // Check if a date is selected
    if (bookingInput.value === "") {
      alert("Please select a booking date first.");
      return;
    }

    // Show confirmation popup
    alert("Your form has been submitted.");

    // Change button text
    submitButton.textContent = "Submitted";

    
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "#aaa";
    submitButton.style.cursor = "not-allowed";
  });









