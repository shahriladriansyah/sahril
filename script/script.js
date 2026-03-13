document.addEventListener("DOMContentLoaded", function () {
  // ===============================
  // MOBILE MENU TOGGLE
  // ===============================

  const menuToggle = document.querySelector(".menu-toggle");
  const navbarMenu = document.querySelector(".navbar ul");

  if (menuToggle && navbarMenu) {
    menuToggle.addEventListener("click", function () {
      navbarMenu.classList.toggle("active");
    });
  }

  // ===============================
  // CLOSE MENU AFTER CLICK (MOBILE)
  // ===============================

  const navLinks = document.querySelectorAll(".navbar ul li a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navbarMenu) {
        navbarMenu.classList.remove("active");
      }
    });
  });

  // ===============================
  // BACK TO TOP BUTTON
  // ===============================

  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ===============================
  // CONTACT FORM VALIDATION
  // ===============================

  const contactForm = document.querySelector(".contact form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const name = contactForm.querySelector("input[name='name']").value.trim();
      const email = contactForm
        .querySelector("input[name='email']")
        .value.trim();
      const message = contactForm
        .querySelector("textarea[name='message']")
        .value.trim();

      if (name === "" || email === "" || message === "") {
        e.preventDefault();
        alert("Please fill in all fields!");
      }
    });
  }
});
