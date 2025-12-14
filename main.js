// const hamburger = document.getElementById("hamburger");
// const navlist = document.getElementById("navlist");
// hamburger.addEventListener("click", ()=> {
//     navlist.classList.toggle("open")
// })




// document.getElementById("searchInput").addEventListener("keyup", function () {
//     let query = this.value.toLowerCase();
//     let apartments = document.querySelectorAll(".apartments > div");

//     apartments.forEach(apartment => {
//         let text = apartment.innerText.toLowerCase();

//         if (text.includes(query)) {
//             apartment.style.display = "block";
//         } else {
//             apartment.style.display = "none";
//         }
//     });
// });


// document.querySelector(".ourapartments button").addEventListener("click", function() {
//     document.getElementById("apartmentsSection").scrollIntoView({
//         behavior: "smooth"
//     });
// });

const hamburger = document.getElementById("hamburger");
const navlist = document.getElementById("navlist");

if (hamburger && navlist) {
  hamburger.addEventListener("click", ()=> {
      navlist.classList.toggle("open");
  });
}


// Search Input
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
      let query = this.value.toLowerCase();
      let apartments = document.querySelectorAll(".apartments > div");

      apartments.forEach(apartment => {
          let text = apartment.innerText.toLowerCase();
          apartment.style.display = text.includes(query) ? "block" : "none";
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

        // switch product pages
        pages.forEach(p => p.classList.remove('active'));
        const activePage = pages[index];
        activePage.classList.add('active');

        // switch active pagination button
        pageButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // 🔥 scroll to start of the active products
        activePage.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  }
});



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


// formbooking
flatpickr("#bookingCalendar", {
  inline: true,
  mode: "range",
  minDate: new Date().fp_incr(1), 
  dateFormat: "y-m-d"
});

// body background color
const bodyColor = document.getElementById("apartmentonebody").style.backgroundColor = "#F9FAFB"


// booking submission
submitButton.addEventListener("click", () => {
  submitButton.textContent = "Submitting...";
  submitButton.disabled = true; // optional: prevents double-clicks

  // Simulate submitting
  setTimeout(() => {
    submitButton.textContent = "Submitted ✔️";
  }, 1000);
});








