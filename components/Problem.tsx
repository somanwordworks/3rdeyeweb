"use client";
import { useEffect } from "react";

export default function Problem() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll("#problem .fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const problems = [
    { level: "THREAT LEVEL: HIGH", icon: "👁️", title: "Unknown Visitors", desc: "Paper-based visitor logs can be forged in seconds. You have no real-time visibility into who is inside your premises at any given moment." },
    { level: "THREAT LEVEL: CRITICAL", icon: "🚨", title: "Attendance Fraud", desc: "Buddy punching costs organizations thousands annually. Manual timesheets are unreliable, easily manipulated, and audit-unfriendly." },
    { level: "THREAT LEVEL: HIGH", icon: "📦", title: "Untracked Deliveries", desc: "Parcels arrive and disappear with no accountability. Courier disputes are impossible to resolve without a verified digital trail." },
    { level: "THREAT LEVEL: MEDIUM", icon: "🔐", title: "Siloed Systems", desc: "HR, security, and building management run on separate tools that don't talk to each other — creating costly inefficiencies and compliance gaps." },
  ];

  return (
    <section className="problem-section" id="problem">
      <div className="container">
        <p className="section-label fade-in">Threat Analysis</p>
        <h2 className="section-title fade-in">Your Facility Has <span>Blind Spots.</span></h2>
        <p className="section-subtitle fade-in">Traditional security is reactive. Clipboards, manual logs, and guesswork leave dangerous gaps. 3rdEye changes the equation entirely.</p>
        <div className="problem-grid">
          {problems.map((p) => (
            <div className="problem-card fade-in" key={p.title}>
              <span className="threat-level">{p.level}</span>
              <span className="problem-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
