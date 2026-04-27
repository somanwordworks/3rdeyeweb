"use client";
import { useEffect } from "react";

const steps = [
  { num: "01", title: "Onboard Your Building", desc: "Pagami Group activates your building profile. Add your tenant companies, configure modules, and set your security parameters." },
  { num: "02", title: "Register Your People", desc: "Import employees and students. EyeGo™ captures facial embeddings — each person is enrolled once, recognized forever." },
  { num: "03", title: "Deploy at Entry Points", desc: "Mount wall kiosks at gates. Guards use the mobile app. Receptionists access the web dashboard. Everyone has their tool." },
  { num: "04", title: "Watch. Control. Analyze.", desc: "Real-time dashboards give building managers total visibility. Download reports, review logs, track anomalies instantly." },
];

export default function HowItWorks() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll("#how .fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="how-section" id="how">
      <div className="container">
        <p className="section-label fade-in">Deployment Protocol</p>
        <h2 className="section-title fade-in">Up and Running<br /><span>in 4 Steps</span></h2>
        <div className="steps-container">
          {steps.map((s) => (
            <div className="step fade-in" key={s.num}>
              <div className="step-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
