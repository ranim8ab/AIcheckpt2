const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

