document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add animations on scroll
    const animatedElements = document.querySelectorAll('.container');
    
    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        animatedElements.forEach(element => {
            const elementPosition = element.offsetTop;
            if (scrollPosition > elementPosition + 100) {
                element.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});
