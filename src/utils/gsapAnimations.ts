import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 1. Bottom to Top Animation
export const animateFromBottom = (target: string) => {
  const elements = gsap.utils.toArray(target) as gsap.DOMTarget[] 
  
  elements.forEach((element: gsap.DOMTarget) => {
    gsap.fromTo(element, 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
          markers: false // Set to true for debugging
        }
      }
    );
  });
};

// 1. Bottom to Top Animation
export const animateFromBottomWithoutScrolingtrigger = (target: string) => {
  const elements = gsap.utils.toArray(target) as gsap.DOMTarget[] 
  
  elements.forEach((element: gsap.DOMTarget) => {
    gsap.fromTo(element, 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  });
};

// 2. Left to Right Animation
export const animateFromLeft = (target: string) => {
  const elements = gsap.utils.toArray(target) as gsap.DOMTarget[] ;
  
  elements.forEach((element: gsap.DOMTarget) => {
    gsap.fromTo(element,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
};


// 3. Right to Left Animation
export const animateFromRight = (target: string) => {
  const elements = gsap.utils.toArray(target) as gsap.DOMTarget[]
  
  elements.forEach((element: gsap.DOMTarget) => {
    gsap.fromTo(element,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
};

// 4. Top to Bottom Animation
export const animateFromTop = (target: string) => {
  const elements = gsap.utils.toArray(target) as gsap.DOMTarget[]
  
  elements.forEach((element: gsap.DOMTarget) => {
    gsap.fromTo(element,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
};

// 5. Scale Zoom Animation
export const animateZoomIn = (target: string) => {
  const elements = gsap.utils.toArray(target) as gsap.DOMTarget[]
  
  elements.forEach((element: gsap.DOMTarget) => {
    gsap.fromTo(element,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(0.1)",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
};

// 5. Scale Zoom Animation
export const animateZoomInWithoutScrollTrigger = (target: string) => {
  const elements = gsap.utils.toArray(target) as gsap.DOMTarget[]
  
  elements.forEach((element: gsap.DOMTarget) => {
    gsap.fromTo(element,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        
      }
    );
  });
};

// 6. Zoom Loop Animation (no scroll trigger needed)
export const animateZoomLoop = (target: string) => {
  const elements = gsap.utils.toArray(target) as gsap.DOMTarget[]
  
  elements.forEach((element: gsap.DOMTarget) => {
    gsap.to(element, {
      scale: 1.1,
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  });
};

// Simple function to run all animations
export const runAnimations = () => {
  // Add a small delay to ensure DOM is ready
  setTimeout(() => {
    animateFromBottom(".animate-bottom");
    animateFromLeft(".animate-left");
    animateFromRight(".animate-right");
    animateFromTop(".animate-top");
    animateZoomIn(".animate-zoom");
    animateZoomLoop(".animate-loop");
    animateFromBottomWithoutScrolingtrigger(".animateFromBottomWithoutScrolingtrigger")
    animateZoomInWithoutScrollTrigger(".animateZoomInWithoutScrollTrigger")
    
    // Refresh ScrollTrigger to recalculate positions
    ScrollTrigger.refresh();
  }, 100);
};

// Function to clean up animations
export const killAllAnimations = () => {
  gsap.killTweensOf("*");
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};