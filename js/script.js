document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            const icon = mobileMenuBtn.querySelector('i');
            if (mainNav.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('open')) {
                    mainNav.classList.remove('open');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;
            const sectionId = current.getAttribute('id');
            const activeLink = document.querySelector(`.main-nav a[href*='${sectionId}']`);

            if (activeLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    activeLink.classList.add('active');
                } else {
                    activeLink.classList.remove('active');
                }
            }
        });
    });

    const galleryCards = document.querySelectorAll('.gallery-card');
    const imageModal = document.getElementById('imageModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxOverlay = document.getElementById('lightboxOverlay');

    function openLightbox(card) {
        const fullSrc = card.getAttribute('data-full-src') || card.querySelector('img').src;
        const title = card.getAttribute('data-title') || card.querySelector('figcaption h3').textContent;
        const caption = card.getAttribute('data-caption') || card.querySelector('figcaption p').textContent;

        lightboxImg.src = fullSrc;
        lightboxImg.alt = title;
        lightboxTitle.textContent = title;
        lightboxDesc.textContent = caption;

        imageModal.classList.add('active');
        imageModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        imageModal.classList.remove('active');
        imageModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    galleryCards.forEach(card => {
        card.addEventListener('click', () => openLightbox(card));
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageModal.classList.contains('active')) {
            closeLightbox();
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', () => {
            alert('🎬 Reprodução de trailer: Vingadores Ultimato - Prévia em alta definição!');
        });
    }
});