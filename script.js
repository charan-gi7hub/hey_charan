// script.js

// Function to handle scroll animations for sections
const handleScrollAnimation = () => {
    const sections = document.querySelectorAll('.container');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (section.offsetTop < scrollPosition) {
            section.classList.add('fade-in');
        }
    });
};

// Event listener for scrolling
window.addEventListener('scroll', handleScrollAnimation);

// Function to initialize scroll animations on page load
const initializeAnimations = () => {
    handleScrollAnimation(); // Trigger initial animations
};

// Initialize animations when the document is ready
document.addEventListener('DOMContentLoaded', initializeAnimations);

// Add smooth scroll to all anchor links
const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Initialize smooth scroll on page load
document.addEventListener('DOMContentLoaded', smoothScroll);
