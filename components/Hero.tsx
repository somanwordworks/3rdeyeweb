"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Glitch effect
    const heroTitleSpan = document.querySelector(".hero-title span") as HTMLElement;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
    let glitching = false;
    const glitchInterval = setInterval(() => {
      if (!heroTitleSpan || glitching) return;
      glitching = true;
      const orig = heroTitleSpan.textContent || "";
      let iter = 0;
      const interval = setInterval(() => {
        heroTitleSpan.textContent = orig.split("").map((c, i) =>
          i < iter ? orig[i] : c === " " ? " " : chars[Math.floor(Math.random() * chars.length)]
        ).join("");
        if (iter >= orig.length) {
          clearInterval(interval);
          heroTitleSpan.textContent = orig;
          glitching = false;
        }
        iter += 1 / 3;
      }, 30);
    }, 5000);

    // Counter animation
    const animateCounter = (el: HTMLElement) => {
      const target = parseInt(el.dataset.target || "0");
      const suffix = el.dataset.suffix || "";
      const duration = 1800;
      const start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      tick();
    };

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll<HTMLElement>("[data-target]").forEach(animateCounter);
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.5 });

    if (statsRef.current) statsObserver.observe(statsRef.current);

    return () => {
      clearInterval(glitchInterval);
      statsObserver.disconnect();
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      <div className="hero-scan"></div>

      <div className="hero-content">
        {/* Animated Eye Orb */}
        <div className="eye-orb">
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="60%" stopColor="#00AEEF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00AEEF" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="80" cy="80" r="72" stroke="#00AEEF" strokeWidth="0.5" strokeDasharray="8 4" className="ring-outer" />
            <circle cx="80" cy="80" r="58" stroke="#00AEEF" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="80" cy="80" r="44" stroke="#00AEEF" strokeWidth="0.5" strokeDasharray="4 6" className="ring-inner" />
            <line x1="80" y1="10" x2="80" y2="150" stroke="#00AEEF" strokeWidth="0.5" strokeOpacity="0.3" />
            <line x1="10" y1="80" x2="150" y2="80" stroke="#00AEEF" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="80" cy="80" r="20" fill="url(#coreGrad)" opacity="0.8" />
            <circle cx="80" cy="80" r="10" fill="#00AEEF" opacity="0.9" />
            <circle cx="80" cy="80" r="5" fill="#00D4FF" />
            <g transform="translate(80,80)">
              <g className="orbit-dot-1"><circle cx="0" cy="0" r="4" fill="#00D4FF" /></g>
              <g className="orbit-dot-2"><circle cx="0" cy="0" r="3" fill="#00AEEF" opacity="0.8" /></g>
            </g>
            <line x1="80" y1="8" x2="80" y2="16" stroke="#00AEEF" strokeWidth="2" />
            <line x1="80" y1="144" x2="80" y2="152" stroke="#00AEEF" strokeWidth="2" />
            <line x1="8" y1="80" x2="16" y2="80" stroke="#00AEEF" strokeWidth="2" />
            <line x1="144" y1="80" x2="152" y2="80" stroke="#00AEEF" strokeWidth="2" />
          </svg>
        </div>

        <div className="status-tag">
          <span className="status-dot"></span>
          SYSTEM ACTIVE — AI VISION ENGINE ONLINE
        </div>

        <h1 className="hero-title">
          See <span>Everything.</span><br />
          Secure Everyone.
        </h1>
        <div className="hero-tagline">AI Vision. Smarter Future.</div>
        <p className="hero-desc">
          <strong>3rdEye</strong> is a next-generation AI-powered security and access control platform — combining facial recognition, visitor management, and smart HR attendance into one unified system for buildings, campuses, and enterprises.
        </p>

        <div className="hero-btns">
          <a href="#cta" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="8" cy="8" r="3" fill="currentColor" />
            </svg>
            Request Demo
          </a>
          <a href="#modules" className="btn-secondary">
            Explore Modules
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </div>

        <div className="hero-stats" ref={statsRef}>
          <div className="stat">
            <div className="stat-num" data-target="3">0</div>
            <div className="stat-label">Core Modules</div>
          </div>
          <div className="stat">
            <div className="stat-num" data-target="512">0</div>
            <div className="stat-label">Facial Vectors</div>
          </div>
          <div className="stat">
            <div className="stat-num" data-target="99" data-suffix="%">0</div>
            <div className="stat-label">Recognition Accuracy</div>
          </div>
          <div className="stat">
            <div className="stat-num" data-target="4">0</div>
            <div className="stat-label">User Role Tiers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
