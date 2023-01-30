const cards = document.querySelectorAll(".cards");
const cardstwo = document.querySelectorAll(".cardstwo");

window.addEventListener("load", (e) => {
  [...cards, ...cardstwo].forEach((card) => {
    if (window.pageYOffset > card.offsetTop - window.innerHeight + 100) {
      card.style.transform = "translateX(0)";
    }
  });
});

window.addEventListener("scroll", (e) => {
  [...cards, ...cardstwo].forEach((card) => {
    if (window.pageYOffset > card.offsetTop - window.innerHeight + 100) {
      card.style.transform = "translateX(0)";
    }
  });
});

const nav = document.querySelector("#nav");
let headerMenu = document.querySelector("#checkbox");

// Block scrolling when menu is open
headerMenu.addEventListener("click", () => {
  if (headerMenu.checked) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
});

let url = window.location.pathname;
let header = document.querySelector("header");
if (url == "/faq") {
  header.style.backgroundImage = "url('/img/faq.jpg')";
} else if (url == "/contact") {
  header.style.backgroundImage = "url('/img/contact.jpg')";
}

let slides = document.querySelectorAll(".slide");
let thumbnails = document.querySelectorAll(".thumbnail");
let currentSlide = document.querySelector(".slide.show");
let slideCount = slides.length;
try {
  let currentSlideId = currentSlide.dataset.slide;
  let nextSlideBtn = document.querySelector(".slide-btn.next");
  let prevSlideBtn = document.querySelector(".slide-btn.prev");
  let nextSlideTimer = 3000;

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", showSlide);
  });

  nextSlideBtn.addEventListener("click", nextSlide);
  prevSlideBtn.addEventListener("click", prevSlide);

  let slideshow = setInterval(nextSlide, nextSlideTimer);

  function showSlide(e) {
    let slideId = e.currentTarget.dataset.slide;

    currentSlide.classList.remove("show");

    currentSlide = document.querySelector(`.slide[data-slide="${slideId}"`);

    currentSlide.classList.add("show");

    resetSlideShow();
  }

  function nextSlide() {
    let nextSlideId =
      currentSlideId >= slideCount ? 1 : parseInt(currentSlideId) + 1;

    currentSlide.classList.remove("show");

    currentSlide = document.querySelector(`.slide[data-slide="${nextSlideId}"`);
    currentSlideId = currentSlide.dataset.slide;

    currentSlide.classList.add("show");

    resetSlideShow();
  }

  function prevSlide() {
    let prevSlideId =
      currentSlideId <= 1 ? slideCount : parseInt(currentSlideId) - 1;

    currentSlide.classList.remove("show");

    currentSlide = document.querySelector(`.slide[data-slide="${prevSlideId}"`);
    currentSlideId = currentSlide.dataset.slide;

    currentSlide.classList.add("show");

    resetSlideShow();
  }

  function resetSlideShow() {
    clearInterval(slideshow);
    slideshow = setInterval(nextSlide, nextSlideTimer);
  }
} catch (error) {
  console.log(error);
}

//Back to top Button

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
