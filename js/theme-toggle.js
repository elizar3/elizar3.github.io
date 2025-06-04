// Apply theme immediately to prevent flash - this runs before DOM is ready
(function() {
  const savedTheme = localStorage.getItem("site-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
})();

// Theme toggle functionality
(function() {
  let currentTheme = localStorage.getItem("site-theme") || "light";
  
  // Set theme function
  function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("site-theme", theme);
    updateThemeButtons(theme);
    
    // Debug log
    console.log("Theme set to:", theme);
  }
  
  // Update theme button appearances
  function updateThemeButtons(theme) {
    const icon = theme === "light" ? "🌓" : "🌙";
    
    const toggleBtn = document.getElementById("theme-toggle");
    const mobileToggleBtn = document.getElementById("mobile-theme-toggle");
    
    if (toggleBtn) {
      toggleBtn.textContent = icon;
    }
    
    if (mobileToggleBtn) {
      const text = theme === "light" ? "Mainīt uz tumšo" : "Mainīt uz gaišo";
      mobileToggleBtn.innerHTML = `${icon} <span>${text}</span>`;
    }
  }
  
  // Toggle theme function
  function toggleTheme() {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }
  
  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    // Update button appearances based on current theme
    updateThemeButtons(currentTheme);
    
    // Add event listeners
    const toggleBtn = document.getElementById("theme-toggle");
    const mobileToggleBtn = document.getElementById("mobile-theme-toggle");
    
    if (toggleBtn) {
      toggleBtn.addEventListener("click", toggleTheme);
    }
    
    if (mobileToggleBtn) {
      mobileToggleBtn.addEventListener("click", toggleTheme);
    }
    
    console.log("Theme toggle initialized with theme:", currentTheme);
  });
  
  // Enable transitions after page load to prevent flash
  window.addEventListener('load', function() {
    document.documentElement.classList.add('theme-transitions-enabled');
  });
  
  // Listen for storage changes from other tabs/windows
  window.addEventListener('storage', function(e) {
    if (e.key === 'site-theme' && e.newValue !== currentTheme) {
      currentTheme = e.newValue || "light";
      document.documentElement.setAttribute("data-theme", currentTheme);
      updateThemeButtons(currentTheme);
      console.log("Theme synced from other tab:", currentTheme);
    }
  });
})();