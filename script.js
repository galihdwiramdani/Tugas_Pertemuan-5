const menuBtn = document.getElementById("menuBtn");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    menuBtn.setAttribute("aria-expanded", open);
  });
}

const noResult = document.getElementById("none");
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    document.querySelectorAll(".sidebar a, .tut").forEach((el) => {
      const text = (el.dataset.title || el.textContent).toLowerCase();
      el.hidden = !text.includes(q);
    });
    if (noResult)
      noResult.hidden = document.querySelector(".tut:not([hidden])") !== null;
  });
}

var slideIndex = 1;

window.plusSlides = function (n) {
  showSlides((slideIndex += n));
};

window.currentSlide = function (n) {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("sldot");
  if (!slides.length) return;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("slideractive");
  }
  slides[slideIndex - 1].style.display = "block";
  if (dots.length > 0) dots[slideIndex - 1].classList.add("slideractive");
}

window.myFunction = function () {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown) dropdown.classList.toggle("show");
};

window.openOffcanvas1 = function () {
  document.getElementById("myOffcanvas").style.width = "250px";
};

window.openOffcanvas = function () {
  document.getElementById("myOffcanvas").style.width = "250px";
};

window.openNav3 = function () {
  var canvasNav = document.getElementById("myCanvasNav");
  if (canvasNav) {
    canvasNav.style.display = "block";
  }
};

window.closeOffcanvas = function () {
  var overlay3 = document.getElementsByClassName("overlay3")[0];
  if (overlay3) overlay3.style.display = "none";
  var myOffcanvas = document.getElementById("myOffcanvas");
  if (myOffcanvas) myOffcanvas.style.width = "0%";
};

window.openCity = function (cityName, evt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tabcontent.length; i++) {
    tablinks[i].classList.remove("tabactive");
  }
  var targetCity = document.getElementById(cityName);
  if (targetCity) targetCity.style.display = "block";
  if (evt) {
    evt.currentTarget.classList.add("tabactive");
  }
};

window.openImg = function (imgName) {
  var i, x;
  x = document.getElementsByClassName("picture");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var targetImg = document.getElementById(imgName);
  if (targetImg) targetImg.style.display = "block";
};

document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);

  var myaccbtn = document.getElementById("myfirstAcc");
  if (myaccbtn) myaccbtn.click();

  var mybtn = document.getElementsByClassName("tablinks")[0];
  if (mybtn) mybtn.click();

  var acc = document.getElementsByClassName("accordion");
  for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("activeacc");
      this.nextElementSibling.classList.toggle("showpanel");
    };
  }

  var modal = document.getElementById("myModal2");
  var images = document.getElementById("eh");
  var modalImg = document.getElementById("img02");
  var captionText = document.getElementById("caption");

  if (images && modal) {
    images.onclick = function () {
      modal.style.display = "block";
      modalImg.src = images.src;
      modalImg.alt = images.alt;
      captionText.innerHTML = images.alt;
    };
  }

  // Navbar Scroll
  const navRow = document.querySelector(".nav-row");
  const prevBtn = document.querySelector(".scroll-arrow.prev");
  const nextBtn = document.querySelector(".scroll-arrow.next");

  if (!navRow) return;

  function updateButtons() {
    const maxScroll = navRow.scrollWidth - navRow.clientWidth;

    if (prevBtn) {
      prevBtn.style.display = navRow.scrollLeft <= 1 ? "none" : "flex";
    }

    if (nextBtn) {
      nextBtn.style.display =
        navRow.scrollLeft >= maxScroll - 1 ? "none" : "flex";
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      navRow.scrollBy({ left: -150, behavior: "smooth" });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      navRow.scrollBy({ left: 150, behavior: "smooth" });
    });
  }

  navRow.addEventListener("scroll", updateButtons);
  updateButtons();
});

window.onclick = function (event) {
  var loginMod = document.getElementById("loginModal");
  if (event.target == loginMod) {
    loginMod.style.display = "none";
  }
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
