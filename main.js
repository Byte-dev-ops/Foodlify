/* ══════════════════════════════════════════
   FOODLIFY — main.js
   Premium UI Interactions
══════════════════════════════════════════ */

/* ─────────────────────────────────────────
   1. CUSTOM CURSOR
───────────────────────────────────────── */
const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

document.addEventListener('mousemove', (e) => {
  cursorDot.style.left  = e.clientX + 'px';
  cursorDot.style.top   = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
});

// Expand ring on interactive elements
const hoverTargets = document.querySelectorAll(
  'a, button, .menu-card, .cat-card, .promo-card, .review-card, .tab-item, li[data-tabs]'
);
hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
  el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
});

/* ─────────────────────────────────────────
   2. MOBILE NAV
───────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');
const navClose  = document.getElementById('nav-close');
const navLinks  = document.querySelectorAll('.nav__link');

hamburger.addEventListener('click', () => navMenu.classList.remove('hidden'));
navClose.addEventListener('click',  () => navMenu.classList.add('hidden'));
navLinks.forEach(link => link.addEventListener('click', () => navMenu.classList.add('hidden')));

/* ─────────────────────────────────────────
   3. HEADER — SCROLL EFFECT
───────────────────────────────────────── */
const header = document.getElementById('header');

const handleHeaderScroll = () => {
  if (window.scrollY >= 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleHeaderScroll, { passive: true });

/* ─────────────────────────────────────────
   4. SCROLL-UP BUTTON
───────────────────────────────────────── */
const scrollUpBtn = document.getElementById('scroll-up');

const handleScrollUp = () => {
  if (window.scrollY >= 300) {
    scrollUpBtn.classList.add('visible');
  } else {
    scrollUpBtn.classList.remove('visible');
  }
};

window.addEventListener('scroll', handleScrollUp, { passive: true });

/* ─────────────────────────────────────────
   5. SCROLL REVEAL (Intersection Observer)
───────────────────────────────────────── */
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing once revealed
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach(el => revealObserver.observe(el));

/* ─────────────────────────────────────────
   6. MENU TABS — FILTER
───────────────────────────────────────── */
const tabItems  = document.querySelectorAll('.tab-item');
const itemWraps = document.querySelectorAll('.item_wrap');

tabItems.forEach(tab => {
  tab.addEventListener('click', () => {

    // Update active state
    tabItems.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.getAttribute('data-tabs');

    itemWraps.forEach(item => {
      const isMatch = filter === 'all' || item.classList.contains(filter);

      if (isMatch) {
        item.style.display = 'block';
        // Animate in
        item.style.opacity   = '0';
        item.style.transform = 'translateY(20px)';
        requestAnimationFrame(() => {
          setTimeout(() => {
            item.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
            item.style.opacity    = '1';
            item.style.transform  = 'translateY(0)';
          }, 30);
        });
      } else {
        item.style.display = 'none';
      }
    });
  });
});

/* ─────────────────────────────────────────
   7. MENU — ADD TO CART MICRO-INTERACTION
───────────────────────────────────────── */
const addBtns = document.querySelectorAll('.menu-add-btn');

addBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    // Switch to check icon
    this.innerHTML = '<i class="fa-solid fa-check"></i>';
    this.style.backgroundColor = '#C9A84C';
    this.style.color = '#000';
    this.style.borderColor = '#C9A84C';

    // Reset after 1.3s
    setTimeout(() => {
      this.innerHTML = '<i class="fa-solid fa-plus"></i>';
      this.style.backgroundColor = 'transparent';
      this.style.color = '#C9A84C';
      this.style.borderColor = 'rgba(201,168,76,0.3)';
    }, 1300);
  });
});

/* ─────────────────────────────────────────
   8. SWIPER — REVIEWS SLIDER
───────────────────────────────────────── */
const swiper = new Swiper('.swiper', {
  speed: 600,
  spaceBetween: 2,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/* ─────────────────────────────────────────
   9. DARK / LIGHT THEME TOGGLE
───────────────────────────────────────── */
const htmlEl    = document.querySelector('html');
const themeBtn  = document.getElementById('theme-toggle');

// Apply saved mode on load
if (localStorage.getItem('mode') === 'dark') {
  enableDark();
} else {
  enableLight();
}

themeBtn.addEventListener('click', () => {
  if (localStorage.getItem('mode') === 'dark') {
    enableLight();
  } else {
    enableDark();
  }
});

function enableDark() {
  htmlEl.classList.add('dark');
  themeBtn.classList.replace('ri-moon-line', 'ri-sun-line');
  localStorage.setItem('mode', 'dark');
}

function enableLight() {
  htmlEl.classList.remove('dark');
  themeBtn.classList.replace('ri-sun-line', 'ri-moon-line');
  localStorage.setItem('mode', 'light');
}

/* ─────────────────────────────────────────
   10. SCROLL REVEAL — ScrollReveal Library
       (fallback / enhanced for hero)
───────────────────────────────────────── */
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    distance: '50px',
    duration:  1000,
    delay:     200,
    reset:     false,
  });

  sr.reveal('.home__image',   { origin: 'right' });
  sr.reveal('.home__content', { origin: 'left'  });
}