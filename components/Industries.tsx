"use client";
import { useEffect } from "react";

const sectors = [
  { icon: "🏗️", title: "Corporate Buildings", desc: "Multi-tenant office complexes with hundreds of daily visitors and dozens of companies requiring isolated data." },
  { icon: "🏭", title: "Industrial Parks", desc: "High-security zones with strict contractor access, delivery management, and shift-based workforce tracking." },
  { icon: "🎓", title: "Educational Institutions", desc: "Schools and universities with large student populations requiring daily touchless attendance and campus security." },
  { icon: "🏥", title: "Healthcare Facilities", desc: "Hospitals and clinics where visitor screening, staff attendance, and delivery verification are mission-critical." },
  { icon: "🏢", title: "IT & Tech Parks", desc: "High-footfall campuses where thousands of employees need frictionless entry and HR systems need to scale." },
];

export default function Industries() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll("#for .fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="for-section" id="for">
      <div className="container">
        <p className="section-label fade-in">Target Sectors</p>
        <h2 className="section-title fade-in">Built for <span>Every Facility</span></h2>
        <p className="section-subtitle fade-in">Wherever people move through gates, 3rdEye provides certainty.</p>
        <div className="for-grid">
          {sectors.map((s) => (
            <div className="for-card fade-in" key={s.title}>
              <span className="for-icon">{s.icon}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
