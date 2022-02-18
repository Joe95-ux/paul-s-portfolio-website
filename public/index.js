// navigation bar
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");

  if (burger !== null) {
    burger.addEventListener("click", () => {
      // toggle nav
      nav.classList.toggle("nav_active");

      // animate links
      navLinks.forEach((link, index) => {
        // + 0.3 for initial delay
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s `;
        }
      });

      // animate burger
      burger.classList.toggle("toggle");
    });
  }
};

// invoke function
navSlide();

// scroll EVENT
window.addEventListener("scroll", function () {
  let navigation = document.querySelector(".navigation");
  let windowPosition = window.scrollY > 0;
  navigation.classList.toggle("scrolling-active", windowPosition);
});

// Loop through the buttons and add the active class to the current/clicked button

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav_links li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});

// footer

const currentYear = new Date().getFullYear();
const copyrightYear = document.querySelector(".year");
if (copyrightYear) {
  copyrightYear.textContent = currentYear;
}

const returnBtns = document.querySelectorAll(".go-back");
// go back to previous page
if (returnBtns !== null) {
  for (let i = 0; i < returnBtns.length; i++) {
    returnBtns[i].addEventListener("click", () => {
      history.back();
    });
  }
}
