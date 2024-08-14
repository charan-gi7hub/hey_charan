// Smooth scrolling for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Delay animation until LinkedIn badge loads
window.addEventListener('load', function() {
    setTimeout(() => {
        document.querySelector('#biodata').style.animation = 'fadeIn 2s ease-in';
    }, 500); // Adjust the delay as needed
});
