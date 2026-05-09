
  // -----------------------------
  // Lenis smooth scroll
  // -----------------------------
  const lenis = new Lenis(
    {
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.06,
      wheelMultiplier: 0.8,
      touchMultiplier: 1,
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 3)
    }
  );
  console.log('lenis:init');
  window.lenis = lenis;

  // Sync Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.addEventListener('refresh', () => lenis.resize());


  // -----------------------------
  // Banner scroll arrow — click scrolls to next section
  // -----------------------------
  // const scrollBtn = document.getElementById('banner-scroll-btn');
  // scrollBtn?.addEventListener('click', () => {
  //   if (window.lenis) {
  //     const treatments = document.querySelector('.treatments-section');
  //     if (treatments) window.lenis.scrollTo(treatments, { duration: 1.6 });
  //   }
  // });


  // -----------------------------
  // Book Appointment — parallax
  // -----------------------------
  const bookApptBg = document.querySelector('.book-appointment-bg img');
  if (bookApptBg) {
    gsap.fromTo(bookApptBg,
      { y: -40 },
      {
        y: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: '.book-appointment-card',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }

  // -----------------------------
  // Fade Text Animation (Reusable)
  // -----------------------------
  // const fadeTexts = gsap.utils.toArray('.fadeText');
  // console.log('fadeText:count', fadeTexts.length);

  // fadeTexts.forEach((el) => {
  //   gsap.fromTo(
  //     el.children,
  //     {
  //       y: 100,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.8,
  //       stagger: 0.1,
  //       ease: 'power2.out',
  //       scrollTrigger: {
  //         trigger: el,
  //         start: 'top 80%',
  //         toggleActions: 'play none none none',
  //       },
  //     }
  //   );
  // });