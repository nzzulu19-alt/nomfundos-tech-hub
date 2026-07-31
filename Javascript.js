document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth scrolling for internal navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Dynamic active states on scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            const correspondingLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

            if (correspondingLink) {
                if (currentScroll > sectionTop && currentScroll <= sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    });

    console.log("Nomfundo's Tech Hub script loaded successfully.");
});

