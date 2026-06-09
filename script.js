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

const certificateViewer = document.getElementById('certificateViewer');
const dotsContainer = document.querySelector('.certificate-dots');
const prevButton = document.querySelector('.certificate-control.prev');
const nextButton = document.querySelector('.certificate-control.next');
const pageLabel = document.getElementById('certificatePageLabel');
const certificateSource = 'All Certificates.pdf';
const certificateCount = 18;
let currentCertificate = 0;
let certificateInterval;

const updateCertificateViewer = (index) => {
    const page = index + 1;
    if (certificateViewer) {
        certificateViewer.src = `${certificateSource}#page=${page}`;
    }
    if (pageLabel) {
        pageLabel.textContent = `Page ${page} of ${certificateCount}`;
    }
    Array.from(dotsContainer.children).forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === index);
    });
    currentCertificate = index;
};

const nextCertificate = () => {
    updateCertificateViewer((currentCertificate + 1) % certificateCount);
};

const prevCertificate = () => {
    updateCertificateViewer((currentCertificate - 1 + certificateCount) % certificateCount);
};

const startCertificateAutoplay = () => {
    certificateInterval = setInterval(nextCertificate, 4500);
};

const stopCertificateAutoplay = () => {
    clearInterval(certificateInterval);
};

if (dotsContainer) {
    for (let i = 0; i < certificateCount; i += 1) {
        const dot = document.createElement('button');
        dot.className = 'certificate-dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', `Show certificate page ${i + 1}`);
        dot.addEventListener('click', () => {
            updateCertificateViewer(i);
            stopCertificateAutoplay();
            startCertificateAutoplay();
        });
        dotsContainer.appendChild(dot);
    }

    if (dotsContainer.children[0]) {
        dotsContainer.children[0].classList.add('active');
    }
}

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

updateCertificateViewer(0);
startCertificateAutoplay();

