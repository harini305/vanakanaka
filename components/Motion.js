"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Only transform, opacity and clip-path are animated, so nothing shifts layout
// or anchor positions. The hidden start state comes from CSS (html.motion),
// which is only set when reduced motion is not requested.
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion")) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    let io;
    let safety;

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo("[data-hero]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.08, delay: 0.1 });
      // The hero photograph settles slowly from a slight zoom.
      gsap.fromTo("[data-hero-image] img", { scale: 1.08 }, { scale: 1, duration: 2.4, ease: "power2.out" });

      // Section entrances, staggered within each group that enters together.
      // IntersectionObserver keeps working when the layout changes after load
      // (the schedule collapses to one day once it knows today's date).
      const show = (els) => {
        const text = els.filter((el) => el.hasAttribute("data-reveal"));
        const pics = els.filter((el) => el.hasAttribute("data-reveal-img"));
        if (text.length) gsap.fromTo(text, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.08, overwrite: true });
        if (pics.length)
          gsap.fromTo(pics, { clipPath: "inset(8% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power3.out", stagger: 0.1, overwrite: true });
      };
      const targets = gsap.utils.toArray("[data-reveal], [data-reveal-img]");
      io = new IntersectionObserver(
        (entries) => {
          const entering = entries.filter((e) => e.isIntersecting).map((e) => e.target);
          entering.forEach((el) => io.unobserve(el));
          if (entering.length) show(entering);
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
      );
      targets.forEach((el) => io.observe(el));
      // Safety net: anything still hidden in view shortly after load is shown.
      safety = setTimeout(() => {
        targets.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < innerHeight && r.bottom > 0 && getComputedStyle(el).opacity === "0") show([el]);
        });
      }, 2500);

    });

    // Keep scroll-linked positions right when the page height changes after load.
    const ro = new ResizeObserver(() => ScrollTrigger.refresh());
    ro.observe(document.body);
    root.classList.add("motion-ready");

    return () => {
      ro.disconnect();
      io?.disconnect();
      clearTimeout(safety);
      mm.revert();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
