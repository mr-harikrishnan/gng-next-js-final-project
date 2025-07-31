
import gsap from "gsap";

export const animateFromTop = (target: string) => {
  gsap.fromTo(
    target,
    { y: -100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    }
  );
};

export const animateFromBottom = (target: string) => {
  gsap.fromTo(
    target,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    }
  );
};

export const animateFromLeft = (target: string) => {
  gsap.fromTo(
    target,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    }
  );
};

export const animateFromRight = (target: string) => {
  gsap.fromTo(
    target,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    }
  );
};


export const animateZoomIn = (target: string) => {
  gsap.fromTo(
    target,
    { scale: 0.5, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    }
  );
};

export const animateZoomLoop = (target: string) => {
  gsap.to(target, {
    scale: 0.9,
    duration: 1.2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true, // 👈 go back and forth
  });
};