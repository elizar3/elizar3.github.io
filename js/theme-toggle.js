// On page load: apply saved theme or default to light
const toggleBtn = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("site-theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

toggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const nextTheme = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("site-theme", nextTheme);
});