"use client";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll("#about .fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    "Real-time visitor management with QR-code digital passes sent via WhatsApp and email",
    "AI-powered facial recognition for touchless attendance — no cards, no PINs",
    "End-to-end delivery and courier tracking with full digital audit trails",
    "Multi-role access across SuperAdmin, Building Admin, Company Admin, and field staff",
    "Deployed on the cloud — instant access from any device, anywhere",
    "Fully white-label ready — your brand, powered by 3rdEye",
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual fade-in">
            <div className="hud-crosshair"></div>
            <div className="hud-circle hud-c1"></div>
            <div className="hud-circle hud-c2"></div>
            <div className="hud-circle hud-c3"></div>
            <div className="hud-center"></div>
            <div className="hud-readout hud-r1">
              SYS: 3RDEYE v2.0<br />
              STATUS: ONLINE<br />
              AI: ACTIVE
            </div>
            <div className="hud-readout hud-r2">
              MODULES: 03/03<br />
              SCAN: CONTINUOUS<br />
              THREAT: ZERO
            </div>
          </div>
          <div className="about-text fade-in">
            <p className="section-label">What is 3rdEye</p>
            <h2 className="section-title">The <span>Intelligent</span> Eye That Never Blinks</h2>
            <p className="section-subtitle">3rdEye is a multi-tenant B2B SaaS security management platform built for buildings, corporate parks, educational institutions, and enterprises that demand more than basic access control.</p>
            <ul>
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
