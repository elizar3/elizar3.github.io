// on page load, read saved theme or default to light
const toggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("site-theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);

toggleBtn.addEventListener("click", () => {
  const newTheme = document.documentElement.getAttribute("data-theme") === "light"
    ? "dark"
    : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("site-theme", newTheme);
});
