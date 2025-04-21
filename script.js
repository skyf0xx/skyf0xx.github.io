// Simple toggle for mobile navigation
document
    .querySelector('.mobile-nav-toggle')
    .addEventListener('click', function () {
        const nav = document.querySelector('.nav');
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
        }
    });

// Smooth scrolling for navigation links
document.querySelectorAll('.nav a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth',
        });
    });
});
