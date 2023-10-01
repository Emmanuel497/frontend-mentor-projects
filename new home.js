
function toggleMenu() {
    const navbar = document.querySelector('#navbar-js');
    const iconMenu = document.querySelector('.Icon-menu');
    const closeMenu = document.querySelector('.close-menu');
  
    iconMenu.addEventListener('click', () => {
      navbar.style.right = '0';
    });
  
    closeMenu.addEventListener('click', () => {
      navbar.style.right = '-100%';
    });
  }
  
  // Call the function to enable the menu toggle
  toggleMenu();
  
