document.addEventListener("DOMContentLoaded", () => {
  // ======================================
  // MOBILE MENU TOGGLE
  // ======================================
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarMenu = document.querySelector(".navbar ul");

  if (menuToggle && navbarMenu) {
    menuToggle.addEventListener("click", () => {
      navbarMenu.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  // ======================================
  // CLOSE MENU AFTER CLICK & RESET BUTTON
  // ======================================
  const navLinks = document.querySelectorAll(".navbar ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
      menuToggle.classList.remove("active"); // Pastikan butang pangkah (X) jadi asal balik
    });
  });

  // ======================================
  // BACK TO TOP BUTTON
  // ======================================
  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      // Guna window.scrollY yang lebih stabil
      if (window.scrollY > 300) {
        backToTop.style.display = "flex"; // Gunakan flex jika kau guna icon di tengah
      } else {
        backToTop.style.display = "none";
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ======================================
  // CONTACT FORM VALIDATION (DENGAN FEEDBACK)
  // ======================================
  const contactForm = document.querySelector(".contact form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      // Gunakan selector yang lebih selamat (kadang-kadang name attr tiada)
      const inputs = contactForm.querySelectorAll("input, textarea");
      let isEmpty = false;

      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          isEmpty = true;
        }
      });

      if (isEmpty) {
        e.preventDefault();
        alert("Sila isi semua ruangan yang disediakan.");
      } else {
        // Optional: Beri mesej berjaya jika hantar guna service lain
        // alert("Mesej anda telah dihantar!");
      }
    });
  }

  // ======================================
  // ACTIVE NAVBAR LINK (SCROLL EFFECT)
  // ======================================
  const sections = document.querySelectorAll("section[id]"); // Hanya ambil section yang ada ID
  const navItems = document.querySelectorAll(".navbar ul li a");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + 200; // Offset supaya aktif lebih awal

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current) && current !== "") {
        link.classList.add("active");
      }
    });
  });
});
