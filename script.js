const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');

if (year) {
    year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(open));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

const slides = document.querySelectorAll('.certificate-slide');
const dotsContainer = document.querySelector('.certificate-dots');
const prevButton = document.querySelector('.certificate-control.prev');
const nextButton = document.querySelector('.certificate-control.next');
let currentCertificate = 0;
let certificateInterval;

const setActiveSlide = (index) => {
    slides[currentCertificate].classList.remove('active');
    dotsContainer.children[currentCertificate].classList.remove('active');
    currentCertificate = index;
    slides[currentCertificate].classList.add('active');
    dotsContainer.children[currentCertificate].classList.add('active');
};

const nextCertificate = () => {
    setActiveSlide((currentCertificate + 1) % slides.length);
};

const prevCertificate = () => {
    setActiveSlide((currentCertificate - 1 + slides.length) % slides.length);
};

const startCertificateAutoplay = () => {
    certificateInterval = setInterval(nextCertificate, 4500);
};

const stopCertificateAutoplay = () => {
    clearInterval(certificateInterval);
};

if (slides.length > 0 && dotsContainer) {
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'certificate-dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', `Show certificate ${index + 1}`);
        dot.addEventListener('click', () => {
            setActiveSlide(index);
            stopCertificateAutoplay();
            startCertificateAutoplay();
        });
        dotsContainer.appendChild(dot);
    });

    dotsContainer.children[currentCertificate].classList.add('active');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            prevCertificate();
            stopCertificateAutoplay();
            startCertificateAutoplay();
        });
        nextButton.addEventListener('click', () => {
            nextCertificate();
            stopCertificateAutoplay();
            startCertificateAutoplay();
        });
    }

    startCertificateAutoplay();
}

