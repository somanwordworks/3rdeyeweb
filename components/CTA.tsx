"use client";
import { useRef } from "react";

export default function CTA() {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = btnRef.current;
    if (!btn) return;
    btn.textContent = "TRANSMITTING...";
    btn.style.background = "#00FF88";
    setTimeout(() => {
      (e.target as HTMLFormElement).submit();
    }, 1000);
  };

  return (
    <section className="cta-section" id="cta">
      <div className="cta-bg"></div>
      <div className="cta-grid"></div>
      <div className="cta-content">
        <p className="section-label" style={{ textAlign: "center", display: "block" }}>Request Access</p>
        <h2 className="cta-title">
          Give Your Facility<br />
          Its <span>Third Eye.</span>
        </h2>
        <p className="cta-sub">
          Join the buildings and institutions that have replaced guesswork with certainty. Request a live demo — see 3rdEye in action on your own premises.
        </p>
        <form
          className="cta-form"
          action="https://formsubmit.co/contact@dnvarc.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            className="cta-input"
            type="email"
            name="email"
            placeholder="Enter your work email"
            required
          />
          <button className="cta-submit" type="submit" ref={btnRef}>
            Request Demo
          </button>
        </form>
        <p className="cta-note">No commitment. Response within 24 hours. · 3rdeyeapp.in</p>
      </div>
    </section>
  );
}
