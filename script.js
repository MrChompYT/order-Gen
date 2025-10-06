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
