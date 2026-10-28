"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { navItems, whatsappLink } from "@/lib/content";
import styles from "./Header.module.css";

const DESKTOP_QUERY = "(min-width: 75em)";

export function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  history.pushState(null, "", `#${id}`);
  // Move focus to the section for keyboard and screen-reader users without a second scroll.
  target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  const close = useCallback((returnFocus) => {
    setOpen(false);
    document.documentElement.classList.remove("menu-open");
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    document.documentElement.classList.toggle("menu-open", next);
  };

  // Direct links and refreshes: jump to the #section once fonts have settled,
  // then enable smooth scrolling for in-page links (an animated scroll on load
  // can be interrupted part-way).
  useEffect(() => {
    const root = document.documentElement;
    const settle = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const target = id && document.getElementById(id);
      if (target) target.scrollIntoView({ block: "start", behavior: "instant" });
      root.classList.add("smooth-scroll");
    };
    if (document.fonts?.ready) document.fonts.ready.then(() => requestAnimationFrame(settle));
    else settle();
  }, []);

  // Active section: the last section whose top has passed just below the header.
  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    let frame = 0;
    const update = () => {
      frame = 0;
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 64;
      const line = header + window.innerHeight * 0.3;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = ids[ids.length - 1];
      setActive(current);
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Escape closes the menu; switching to the desktop layout closes it too.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close(true);
    };
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e) => e.matches && close(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    panelRef.current?.querySelector("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open, close]);

  // On the home page links scroll in place; elsewhere they navigate to /#id.
  const onNavClick = (e, id) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (!document.getElementById(id)) return;
    e.preventDefault();
    close(false);
    scrollToSection(id);
  };

  const links = (variant) =>
    navItems.map((item) => (
      <li key={item.id}>
        <a
          href={`/#${item.id}`}
          className={variant}
          aria-current={active === item.id ? "location" : undefined}
          onClick={(e) => onNavClick(e, item.id)}
        >
          {item.label}
        </a>
      </li>
    ));

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.bar}`}>
        <a
          href="/"
          className={styles.brand}
          onClick={(e) => {
            if (!document.getElementById("top")) return;
            e.preventDefault();
            close(false);
            window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
            history.pushState(null, "", window.location.pathname);
          }}
        >
          <img src="/images/mark-176.webp" alt="" width="44" height="44" className={styles.mark} />
          <span className={styles.wordmark}>Vana Kanaka</span>
          <span className="visually-hidden"> Yoga Bali, back to top</span>
        </a>

        <nav aria-label="Primary" className={styles.desktopNav}>
          <ul>{links(styles.link)}</ul>
        </nav>

        <a className={`btn btn-terracotta ${styles.book}`} href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          <span>
            Book<span className={styles.bookExtra}> via WhatsApp</span>
            <span className="visually-hidden"> (opens WhatsApp in a new tab)</span>
          </span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={toggle}
        >
          <span className={styles.toggleIcon} aria-hidden="true" />
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div id="mobile-menu" ref={panelRef} className={styles.panel} hidden={!open}>
        <nav aria-label="Primary mobile" className="container">
          <ul>{links(styles.panelLink)}</ul>
          <a
            className={`btn btn-terracotta ${styles.panelBook}`}
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => close(false)}
          >
            Book via WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </nav>
      </div>
      {open && <div className={styles.scrim} onClick={() => close(false)} aria-hidden="true" />}
    </header>
  );
}
