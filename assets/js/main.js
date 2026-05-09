// ===== WHAT WE DO BEST SWIPER =====

(function () {
  const wwdbEl = document.querySelector(".wwdb-swiper");
  if (!wwdbEl || typeof Swiper === "undefined") return;

  const canAnimate = typeof gsap !== "undefined";

  const getFadeTargets = (slide) =>
    Array.from(
      slide.querySelectorAll(
        ".wwdb-center-text > *, .wwdb-center-footer, .wwdb-col-center-bg, .wwdb-side-card img, .wwdb-text-card"
      )
    );

  const fadeInSlide = (slide) => {
    if (!canAnimate) return;
    gsap.fromTo(
      getFadeTargets(slide),
      { autoAlpha: 0, y: 14 },
      { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" }
    );
  };

  const hideSlide = (slide) => {
    if (!canAnimate) return;
    gsap.set(getFadeTargets(slide), { autoAlpha: 0, y: 0 });
  };

  const wwdbSwiper = new Swiper(wwdbEl, {
    loop: true,
    speed: 300,
    allowTouchMove: true,
    effect: "fade",
    on: {
      init(swiper) {
        swiper.slides.forEach((slide, i) => {
          if (i !== swiper.activeIndex) hideSlide(slide);
        });
        fadeInSlide(swiper.slides[swiper.activeIndex]);
      },
      slideChangeTransitionStart(swiper) {
        hideSlide(swiper.slides[swiper.previousIndex]);
        fadeInSlide(swiper.slides[swiper.activeIndex]);
      },
    },
  });

  wwdbEl.addEventListener("click", function (e) {
    if (e.target.closest(".wwdb-prev")) wwdbSwiper.slidePrev();
    if (e.target.closest(".wwdb-next")) wwdbSwiper.slideNext();
  });
})();

// ===== NAV DRAWER =====
(function () {
    const drawer = document.getElementById('nav-drawer');
    const panel = drawer?.querySelector('.nav-drawer-panel');
    const backdrop = drawer?.querySelector('.nav-drawer-backdrop');
    const openBtn = document.getElementById('nav-open');
    const closeBtn = document.getElementById('nav-close');

    if (!drawer || !panel) return;

    const canAnimate = typeof gsap !== 'undefined';

    // Panel starts off-screen right; backdrop at opacity 0 (CSS)
    if (canAnimate) {
        gsap.set(panel, { x: '100%' });
    }

    const openNav = () => {
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
        openBtn?.setAttribute('aria-expanded', 'true');
        if (window.lenis) window.lenis.stop();

        if (canAnimate) {
            gsap.to(backdrop, { opacity: 1, duration: 0.4, ease: 'power2.out' });
            gsap.to(panel, { x: 0, duration: 0.65, ease: 'power3.out' });
        }
    };

    const closeNav = () => {
        drawer.setAttribute('aria-hidden', 'true');
        openBtn?.setAttribute('aria-expanded', 'false');

        if (canAnimate) {
            gsap.to(backdrop, { opacity: 0, duration: 0.35, ease: 'power2.in' });
            gsap.to(panel, {
                x: '100%',
                duration: 0.45,
                ease: 'power2.in',
                onComplete: () => {
                    drawer.classList.remove('is-open');
                    if (window.lenis) window.lenis.start();
                }
            });
        } else {
            drawer.classList.remove('is-open');
            if (window.lenis) window.lenis.start();
        }
    };

    openBtn?.addEventListener('click', openNav);
    closeBtn?.addEventListener('click', closeNav);
    backdrop?.addEventListener('click', closeNav);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
            closeNav();
        }
    });
})();

// ===== SERVICES SUBMENU =====
(function () {
    const toggle = document.getElementById('services-toggle');
    const submenu = document.getElementById('services-submenu');
    if (!toggle || !submenu) return;

    const canAnimate = typeof gsap !== 'undefined';

    if (canAnimate) {
        gsap.set(submenu, { height: 0, overflow: 'hidden' });
    }

    let isOpen = false;

    toggle.addEventListener('click', () => {
        isOpen = !isOpen;
        toggle.setAttribute('aria-expanded', String(isOpen));
        submenu.setAttribute('aria-hidden', String(!isOpen));
        toggle.classList.toggle('is-open', isOpen);

        if (canAnimate) {
            gsap.to(submenu, {
                height: isOpen ? 'auto' : 0,
                duration: isOpen ? 0.45 : 0.3,
                ease: isOpen ? 'power3.out' : 'power2.in',
                overwrite: true,
            });
        }
    });
})();

// ===== GALLERY SWIPER =====
var gallerySwiper = new Swiper(".gallery-swiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    speed: 700,
    grabCursor: true,
    observer: true,
    observeParents: true,
});

document.querySelector(".gallery-carousel-wrap")?.addEventListener("click", function (e) {
    if (e.target.closest(".gallery-prev")) gallerySwiper.slidePrev();
    if (e.target.closest(".gallery-next")) gallerySwiper.slideNext();
});
