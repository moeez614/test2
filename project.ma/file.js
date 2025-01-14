// Get the header nav element
const headerNav = document.querySelector('.header-nav');

// Get the button element that will wrap the header nav
const navButton = document.createElement('button');
navButton.classList.add('nav-button');
navButton.textContent = 'Menu';

// Add an event listener to the window to check the width
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  if (width < 668) {
    // Wrap the header nav in the button
    navButton.appendChild(headerNav);
    document.body.appendChild(navButton);
  } else {
    // Remove the button and restore the original header nav
    navButton.removeChild(headerNav);
    document.body.appendChild(headerNav);
  }
});

// Initialize the state
const width = window.innerWidth;
if (width < 668) {
  navButton.appendChild(headerNav);
  document.body.appendChild(navButton);
}

// Add an event listener to the button to toggle the header nav
navButton.addEventListener('click', () => {
  if (headerNav.style.display === 'none') {
    headerNav.style.display = 'block';
    navButton.textContent = 'Close';
  } else {
    headerNav.style.display = 'none';
    navButton.textContent = 'Menu';
  }
});