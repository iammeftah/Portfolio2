// Get DOM elements
const mobileMenuButton = document.querySelector('[aria-label="Open main menu"]');
const mobileMenu = document.querySelector('[role="dialog"]');
const closeMenuButton = mobileMenu.querySelector('[aria-label="Close menu"]');

// Function to open mobile menu
function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Function to close mobile menu
function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Event listeners
mobileMenuButton.addEventListener('click', openMobileMenu);
closeMenuButton.addEventListener('click', closeMobileMenu);

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        closeMobileMenu();
    }
});

// Handle menu item clicks (optional)
const menuItems = mobileMenu.querySelectorAll('a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        closeMobileMenu();
    });
});