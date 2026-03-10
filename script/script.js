// ===============================
// MENU TOGGLE (MOBILE)
// ===============================

function toggleMenu() {
  const menu = document.querySelector(".navbar ul");
  menu.classList.toggle("active");
}

// ===============================
// BACK TO TOP BUTTON
// ===============================

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ===============================
// SMOOTH SCROLL NAVBAR
// ===============================

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ===============================
// CONTACT FORM VALIDATION
// ===============================

const form = document.querySelector(".contact form");

form.addEventListener("submit", function (e) {
  const name = form.querySelector("input[name='name']").value.trim();
  const email = form.querySelector("input[name='email']").value.trim();
  const message = form.querySelector("textarea[name='message']").value.trim();

  if (name === "" || email === "" || message === "") {
    e.preventDefault();
    alert("Please fill in all fields!");
  }
});

// ===============================
// CLOSE MOBILE MENU AFTER CLICK
// ===============================

document.querySelectorAll(".navbar ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".navbar ul").classList.remove("active");
  });
});
