/* =====================================================
   SWAPY — Animations Controller
   Drop this AFTER landingPage.js at the bottom of <body>
   ===================================================== */

(function () {
    'use strict';

    /* ── 1. SCROLL PROGRESS BAR ── */
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (scrolled / maxScroll * 100) + '%';
    }, { passive: true });


    /* ── 2. NAVBAR SHRINK ON SCROLL ── */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });
    }


    /* ── 3. SCROLL-REVEAL via IntersectionObserver ── */
    // Automatically tag common element groups so you don't need to
    // touch your HTML at all.
    function autoTag(selector, attr, value, delay) {
        document.querySelectorAll(selector).forEach((el, i) => {
            if (!el.hasAttribute('data-reveal') && !el.hasAttribute('data-stagger')) {
                el.setAttribute(attr, value);
                if (delay) el.style.transitionDelay = (i * delay) + 's';
            }
        });
    }

    // Section headers fade up
    autoTag('.section-header', 'data-reveal', 'up');

    // Category row → stagger children
    document.querySelectorAll('.categories-section .row').forEach(row => {
        row.setAttribute('data-stagger', '');
    });

    // Step cards
    document.querySelectorAll('.step-card').forEach((el, i) => {
        el.setAttribute('data-reveal', 'up');
        el.style.transitionDelay = (i * 0.12) + 's';
    });

    // Item cards
    document.querySelectorAll('.item-card').forEach((el, i) => {
        el.setAttribute('data-reveal', 'up');
        el.style.transitionDelay = (i * 0.1) + 's';
    });

    // Pricing cards
    document.querySelectorAll('.pricing-card').forEach((el, i) => {
        el.setAttribute('data-reveal', 'up');
        el.style.transitionDelay = (i * 0.12) + 's';
    });

    // Footer columns
    document.querySelectorAll('.footer .row').forEach(row => {
        row.setAttribute('data-stagger', '');
    });

    // The observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal], [data-stagger]').forEach(el => {
        revealObserver.observe(el);
    });


    /* ── 4. ANIMATED STAT NUMBERS ── */
    function animateCount(el) {
        const raw = el.textContent.trim();        // e.g. "10K+"
        const suffix = raw.replace(/[\d.]/g, ''); // "K+"
        const target = parseFloat(raw);
        if (isNaN(target)) return;

        let start = null;
        const duration = 1400;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(ease * target);
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(el => statObserver.observe(el));


    /* ── 5. ADVANCED FILTERS — SMOOTH OPEN/CLOSE ── */
    // Patch the existing toggleAdvancedFilters so filters animate in
    const filtersPanel = document.getElementById('advancedFilters');
    if (filtersPanel && typeof window.toggleAdvancedFilters === 'function') {
        const _original = window.toggleAdvancedFilters;
        window.toggleAdvancedFilters = function () {
            const isHidden = filtersPanel.style.display === 'none' || filtersPanel.style.display === '';
            if (isHidden) {
                filtersPanel.style.display = 'block';
                // Force reflow then add class for CSS animation
                void filtersPanel.offsetHeight;
                filtersPanel.classList.add('filters-visible');
            } else {
                filtersPanel.classList.remove('filters-visible');
                // Wait for transition before hiding
                setTimeout(() => { filtersPanel.style.display = 'none'; }, 200);
            }
        };
    }


    /* ── 6. FLOATING HERO PARTICLES ── */
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const count = 10;
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'hero-particle';
            const size = Math.random() * 28 + 10;
            p.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${Math.random() * 100}%;
                bottom: -${size}px;
                animation-duration: ${Math.random() * 12 + 10}s;
                animation-delay: ${Math.random() * 8}s;
                opacity: 0;
            `;
            heroSection.appendChild(p);
        }
    }


    /* ── 7. BUTTON RIPPLE (click effect) ── */
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn');
        if (!btn) return;

        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 1.6;
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${e.clientX - rect.left - size / 2}px;
            top: ${e.clientY - rect.top - size / 2}px;
            background: rgba(255,255,255,0.28);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleBurst 0.55s ease-out forwards;
            pointer-events: none;
            z-index: 10;
        `;
        btn.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    });

    // Inject ripple keyframe once
    if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes rippleBurst {
                to { transform: scale(1); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }


    /* ── 8. BACK TO TOP BUTTON ── */
    const backTop = document.createElement('button');
    backTop.id = 'back-to-top';
    backTop.title = 'Back to top';
    backTop.innerHTML = '<i class="bi bi-arrow-up"></i>';
    document.body.appendChild(backTop);

    window.addEventListener('scroll', () => {
        backTop.classList.toggle('visible', window.scrollY > 450);
    }, { passive: true });

    backTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    /* ── 9. SMOOTH ACTIVE NAV LINK HIGHLIGHT ── */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const isActive = link.getAttribute('href') === `#${id}`;
                    link.style.color = isActive
                        ? 'var(--primary-orange)'
                        : '';
                    link.style.fontWeight = isActive ? '700' : '';
                });
            }
        });
    }, { threshold: 0.35 });

    sections.forEach(s => sectionObserver.observe(s));


    /* ── 10. HERO CTA BOX — subtle float ── */
    const ctaBox = document.querySelector('.hero-cta-box');
    if (ctaBox) {
        ctaBox.style.animation = 'ctaFloat 4s ease-in-out infinite';

        const style = document.createElement('style');
        style.textContent = `
            @keyframes ctaFloat {
                0%, 100% { transform: translateY(0); }
                50%       { transform: translateY(-8px); }
            }
        `;
        document.head.appendChild(style);
    }

})();