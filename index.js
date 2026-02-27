// Mobile menu toggle functionality
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const body = document.body;
    
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open');
    
    // Close all dropdowns when closing menu
    if (!navLinks.classList.contains('active')) {
        const dropdowns = document.querySelectorAll('.has-dropdown');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
}

// Handle dropdown toggles on mobile
document.addEventListener('DOMContentLoaded', function() {
    const hasDropdowns = document.querySelectorAll('.has-dropdown');
    
    hasDropdowns.forEach(dropdown => {
        const navItem = dropdown.querySelector('.nav-item');
        
        navItem.addEventListener('click', function(e) {
            // Only toggle on mobile (when menu is active)
            const navLinks = document.getElementById('navLinks');
            if (navLinks.classList.contains('active')) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                hasDropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            }
        });
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(event.target) && 
        !mobileToggle.contains(event.target)) {
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        
        // Close all dropdowns
        const dropdowns = document.querySelectorAll('.has-dropdown');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
});

// Close mobile menu on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const navLinks = document.getElementById('navLinks');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            // Close all dropdowns
            const dropdowns = document.querySelectorAll('.has-dropdown');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    }
});