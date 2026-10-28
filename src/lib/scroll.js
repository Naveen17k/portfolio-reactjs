import Lenis from "lenis";

let lenis = null;

export function startSmoothScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
  let frame;
  const raf = (time) => {
    lenis.raf(time);
    frame = requestAnimationFrame(raf);
  };
  frame = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(frame);
    lenis.destroy();
    lenis = null;
  };
}

export function scrollToId(id) {
  const target = id === "top" ? 0 : document.getElementById(id);
  if (target === null) return;
  if (lenis) {
    lenis.scrollTo(target, { offset: -64, duration: 1.2 });
  } else if (target === 0) {
    window.scrollTo({ top: 0 });
  } else {
    target.scrollIntoView();
  }
}
