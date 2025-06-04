document.addEventListener('DOMContentLoaded', function() {
  const hamburgerToggle = document.getElementById('hamburger-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  const desktopThemeToggle = document.getElementById('theme-toggle');

  // Toggle mobile menu
  function toggleMobileMenu() {
    hamburgerToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Close mobile menu
  function closeMobileMenu() {
    hamburgerToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event listeners
  if (hamburgerToggle) {
    hamburgerToggle.addEventListener('click', toggleMobileMenu);
  }
  
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Mobile theme toggle functionality
  if (mobileThemeToggle && desktopThemeToggle) {
    mobileThemeToggle.addEventListener('click', function() {
      desktopThemeToggle.click(); // Trigger the main theme toggle
    });
  }

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // Close menu on window resize if it's open
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && mobileMenu && mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  });
});