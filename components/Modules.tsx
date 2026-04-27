"use client";
import { useEffect } from "react";

const modules = [
  {
    badge: "MODULE 01 — VISITOR",
    icon: "🏢",
    title: "Visitor Management",
    desc: "From pre-approval to exit, every visitor interaction is logged, verified, and traceable. Replace paper logs with smart digital passes that visitors carry on their phone.",
    features: [
      "Digital QR visitor passes via WhatsApp & email",
      "Pre-approval workflow for expected visitors",
      "Real-time visitor overview dashboard",
      "Instant host notifications on arrival",
      "Complete visit history and audit logs",
      "Overstay alerts and exit tracking",
    ],
  },
  {
    badge: "MODULE 02 — DELIVERY",
    icon: "📦",
    title: "Delivery & Courier",
    desc: "Every parcel entering your premises is scanned, assigned, and tracked to its recipient. No more lost deliveries, no more disputes, no more liability.",
    features: [
      "Inbound delivery registration with photo capture",
      "Courier tracking from gate to recipient",
      "Dispatch management and outbound logging",
      "Recipient notification system",
      "Tamper-proof digital chain of custody",
      "Cloudinary-backed photo storage",
    ],
  },
  {
    badge: "MODULE 03 — EYEGO™ + HR",
    icon: "🤖",
    title: "EyeGo™ + HR Suite",
    desc: "The most advanced module in the arsenal — AI facial recognition powers a complete HR attendance, leave management, and employee self-service ecosystem.",
    features: [
      "Touchless face scan attendance (Facenet512 AI)",
      "Wall kiosk mode for auto-scan at entry points",
      "HR profiles, attendance logs, and analytics",
      "Leave management and approval workflows",
      "Employee Self-Service (ESS) portal",
      "Supports both employees and students",
    ],
  },
];

export default function Modules() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll("#modules .fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="modules-section" id="modules">
      <div className="container">
        <p className="section-label fade-in">Platform Modules</p>
        <h2 className="section-title fade-in">Three Weapons.<br /><span>One Platform.</span></h2>
        <p className="section-subtitle fade-in">Choose the modules your facility needs. Each is a precision tool — deploy one or all three.</p>
        <div className="modules-grid">
          {modules.map((m) => (
            <div className="module-card fade-in" key={m.title}>
              <span className="module-badge">{m.badge}</span>
              <div className="module-icon">{m.icon}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              <div className="module-divider"></div>
              <ul className="module-features">
                {m.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
