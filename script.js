// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.querySelector("nav ul");

  // Toggle mobile nav menu
  if (navToggle && navMenu) {
    navToggle.addEventListener("change", () => {
      if (navToggle.checked) {
        navMenu.classList.add("open");
        document.body.classList.add("menu-open");
      } else {
        navMenu.classList.remove("open");
        document.body.classList.remove("menu-open");
      }
    });
  }

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.length > 1) {
        e.preventDefault();
        document.querySelector(targetId)?.scrollIntoView({
          behavior: "smooth"
        });
        navToggle.checked = false;
        navMenu.classList.remove("open");
      }
    });
  });

  // Responsive grid adjustments (fallback for very old browsers)
  const resizeHandler = () => {
    const grids = document.querySelectorAll(".grid-3, .cards");
    const isMobile = window.innerWidth < 768;
    grids.forEach(grid => {
      if (isMobile) {
        grid.style.display = "block";
      } else {
        grid.style.display = "grid";
      }
    });
  };
  window.addEventListener("resize", resizeHandler);
  resizeHandler();
});

// PATTE Conservation Responsive Enhancer
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  function updateLayoutClass() {
    const width = window.innerWidth;
    body.classList.remove("is-mobile", "is-tablet", "is-desktop");

    if (width < 768) {
      body.classList.add("is-mobile");
    } else if (width < 1024) {
      body.classList.add("is-tablet");
    } else {
      body.classList.add("is-desktop");
    }
  }

  // Initial check + listener
  updateLayoutClass();
  window.addEventListener("resize", updateLayoutClass);

  // Mobile nav toggle behavior
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.querySelector("nav ul");

  if (navToggle && navMenu) {
    navToggle.addEventListener("change", () => {
      navMenu.classList.toggle("open", navToggle.checked);
      document.body.classList.toggle("menu-open", navToggle.checked);
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        if (navToggle) navToggle.checked = false;
        navMenu?.classList.remove("open");
        document.body.classList.remove("menu-open");
      }
    });
  });
});
