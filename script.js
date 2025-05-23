//Use this panel to make your page more interactive!!!
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  const sections = document.querySelectorAll(".content");

  function showSection(targetId) {
    sections.forEach(section => {
      section.style.display = section.id === targetId ? "block" : "none";
    });
  }

  // Default to showing the home section
  showSection("home-section");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      showSection(targetId);
    });
  });
});

