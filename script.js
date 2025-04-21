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

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth',
            });
        }
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= 100 && rect.bottom >= 100;
}

// Function to highlight active section in nav
function highlightNavOnScroll() {
    // Check all sections and divs with IDs
    const elements = document.querySelectorAll('section[id], div.section');

    // Check which element is in view
    elements.forEach((element) => {
        // Get the ID - for divs in sidebar, use the section title text
        let sectionId;

        if (element.hasAttribute('id')) {
            sectionId = element.getAttribute('id');
        } else if (element.querySelector('.section-title')) {
            // For sidebar elements, get the section title text and convert to lowercase ID
            const titleText = element
                .querySelector('.section-title')
                .textContent.toLowerCase();
            // Handle special case for skills section
            if (titleText === 'skills') {
                sectionId = 'skills';
            } else if (titleText === 'education') {
                sectionId = 'education';
            } else if (titleText === 'certifications') {
                sectionId = 'certifications';
            }
        }

        if (sectionId) {
            const navLink = document.querySelector(
                `.nav a[href="#${sectionId}"]`
            );

            if (isInViewport(element) && navLink) {
                // Remove active class from all links
                document.querySelectorAll('.nav a').forEach((link) => {
                    link.classList.remove('active');
                });

                // Add active class to corresponding link
                navLink.classList.add('active');
            }
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', highlightNavOnScroll);

// Call once on page load to set initial state
document.addEventListener('DOMContentLoaded', highlightNavOnScroll);
