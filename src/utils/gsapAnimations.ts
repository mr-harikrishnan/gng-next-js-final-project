import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const animatedElements = new Set<Element>();

const isAlreadyAnimated = (element: Element): boolean => {
  return animatedElements.has(element);
};

const markAsAnimated = (element: Element): void => {
  animatedElements.add(element);
};

export const animateFromBottom = (target: string) => {
  const elements = gsap.utils.toArray(target) as Element[];
  
  elements.forEach((element: Element) => {
    if (isAlreadyAnimated(element)) return;
    
    gsap.set(element, { y: 100, opacity: 0 });
    
    gsap.to(element, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      onStart: () => markAsAnimated(element),
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none none", // Changed to prevent reverse
        once: true, // Only trigger once
        markers: false
      }
    });
  });
};

// 2. Left to Right Animation - Fixed
export const animateFromLeft = (target: string) => {
  const elements = gsap.utils.toArray(target) as Element[];
  
  elements.forEach((element: Element) => {
    if (isAlreadyAnimated(element)) return;
    
    gsap.set(element, { x: -100, opacity: 0 });
    
    gsap.to(element, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      onStart: () => markAsAnimated(element),
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });
};

// 3. Right to Left Animation - Fixed
export const animateFromRight = (target: string) => {
  const elements = gsap.utils.toArray(target) as Element[];
  
  elements.forEach((element: Element) => {
    if (isAlreadyAnimated(element)) return;
    
    gsap.set(element, { x: 100, opacity: 0 });
    
    gsap.to(element, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      onStart: () => markAsAnimated(element),
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });
};

// 4. Top to Bottom Animation - Fixed
export const animateFromTop = (target: string) => {
  const elements = gsap.utils.toArray(target) as Element[];
  
  elements.forEach((element: Element) => {
    if (isAlreadyAnimated(element)) return;
    
    gsap.set(element, { y: -100, opacity: 0 });
    
    gsap.to(element, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      onStart: () => markAsAnimated(element),
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });
};

// 5. Scale Zoom Animation - Fixed
export const animateZoomIn = (target: string) => {
  const elements = gsap.utils.toArray(target) as Element[];
  
  elements.forEach((element: Element) => {
    if (isAlreadyAnimated(element)) return;
    
    gsap.set(element, { scale: 0, opacity: 0 });
    
    gsap.to(element, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      onStart: () => markAsAnimated(element),
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });
};

// Non-scroll trigger animations (these don't need fixes as they don't flicker)
export const animateFromBottomWithoutScrolingtrigger = (target: string) => {
  const elements = gsap.utils.toArray(target) as Element[];
  
  elements.forEach((element: Element) => {
    if (isAlreadyAnimated(element)) return;
    
    gsap.fromTo(element, 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        onStart: () => markAsAnimated(element)
      }
    );
  });
};

export const animateZoomInWithoutScrollTrigger = (target: string) => {
  const elements = gsap.utils.toArray(target) as Element[];
  
  elements.forEach((element: Element) => {
    if (isAlreadyAnimated(element)) return;
    
    gsap.fromTo(element,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        onStart: () => markAsAnimated(element)
      }
    );
  });
};

// Loop animation (continuous - should not be prevented)
export const animateZoomLoop = (target: string) => {
  const elements = gsap.utils.toArray(target) as Element[];
  
  elements.forEach((element: Element) => {
    gsap.to(element, {
      scale: 1.1,
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  });
};

// Alternative: Single run function with better control
export const runAnimationsOnce = () => {
  // Clear any existing ScrollTriggers first
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
  setTimeout(() => {
    animateFromBottom(".animate-bottom, .bottom-animated-img");
    animateFromLeft(".animate-left, .left-animated-img");
    animateFromRight(".animate-right, .right-animated-img");
    animateFromTop(".animate-top, .top-animated-img");
    animateZoomIn(".animate-zoom, .zoom-scale");
    animateZoomLoop(".animate-loop, .zoom-scale-loop");
    animateFromBottomWithoutScrolingtrigger(".animateFromBottomWithoutScrolingtrigger");
    animateZoomInWithoutScrollTrigger(".animateZoomInWithoutScrollTrigger");
    
    ScrollTrigger.refresh();
  }, 100);
};

// Enhanced cleanup function
export const killAllAnimations = () => {
  gsap.killTweensOf("*");
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  animatedElements.clear(); // Clear the tracking set
};

// Reset function if you need to re-animate everything
export const resetAnimations = () => {
  killAllAnimations();
  runAnimationsOnce();
};