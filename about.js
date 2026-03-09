// About page-specific JavaScript

// common header/animation logic for hero and sections

document.addEventListener("DOMContentLoaded", () => {
  // register GSAP plugin
  gsap.registerPlugin(ScrollTrigger);

  // hero timeline
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTl
    .from(".about-hero .container > h1", { y: 50, opacity: 1, duration: 1 })
    .from(
      ".about-hero .hero-subtitle",
      { y: 30, opacity: 1, duration: 0.8 },
      "-=0.6"
    )
    .from(
      ".about-hero .btn-cta",
      { scale: 0.9, opacity: 1, duration: 0.6 },
      "-=0.4"
    );

  // scroll-triggered reveals
  const sections = [
    ".mission-vision",
    ".history",
    ".team",
    ".values",
    ".awards",
    ".careers",
  ];

  sections.forEach((sel) => {
    gsap.from(`${sel} .container`, {
      scrollTrigger: {
        trigger: sel,
        start: "top 80%",
      },
      opacity: 1,
      y: 40,
      duration: 1,
      ease: "power2.out",
    });
  });

  // team member hover
  document.querySelectorAll(".team-member").forEach((member) => {
    member.addEventListener("mouseenter", () => {
      gsap.to(member, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    });
    member.addEventListener("mouseleave", () => {
      gsap.to(member, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  });

  // values list bounce on hover
  document.querySelectorAll(".values-list li").forEach((li) => {
    li.addEventListener("mouseenter", () => {
      gsap.to(li, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    });
    li.addEventListener("mouseleave", () => {
      gsap.to(li, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  });

  // header colour on scroll (same as index)
//   window.addEventListener("scroll", function () {
//     const header = document.querySelector(".header2");
//     const mainSection = document.querySelector("main");

//     if (mainSection) {
//       const sectionBottom = mainSection.getBoundingClientRect().bottom;
//       if (sectionBottom <= 0) {
//         header.classList.add("scrolled");
//       } else {
//         header.classList.remove("scrolled");
//       }
//     }
//   });
// });

// 

gsap.registerPlugin(ScrollTrigger);

// 1. Text Slide-up Reveal
gsap.utils.toArray('.reveal-text').forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 85%",
    },
    x: -100,
    opacity: 1,
    duration: 1,
    ease: "power4.out"
  });
});

// 2. Staggered Card Entry
gsap.from(".value-card", {
  scrollTrigger: {
    trigger: ".values-grid",
    start: "top 80%",
  },
  y: 100,
  opacity: 1,
  duration: 1,
  stagger: 0.2,
  ease: "back.out(1.7)"
});

// 3. Smooth Parallax Effect
gsap.to(".awards-parallax-bg", {
  scrollTrigger: {
    trigger: ".awards",
    scrub: true,
  },
  y: -150,
  ease: "none"
});

// 4. Careers Image Fade & Scale
gsap.from(".img-reveal", {
  scrollTrigger: {
    trigger: ".careers",
    start: "top 70%",
  },
  scale: 0.8,
  opacity: 1,
  duration: 1.2,
  ease: "power2.out"
});
