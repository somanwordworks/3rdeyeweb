"use client";
import { useEffect } from "react";

const dots = [
  { top: "25%", left: "30%", delay: "0s" },
  { top: "25%", left: "68%", delay: "0.2s" },
  { top: "40%", left: "50%", delay: "0.4s" },
  { top: "55%", left: "35%", delay: "0.1s" },
  { top: "55%", left: "65%", delay: "0.3s" },
  { top: "68%", left: "50%", delay: "0.5s" },
  { top: "80%", left: "42%", delay: "0.2s" },
  { top: "80%", left: "58%", delay: "0.4s" },
  { top: "15%", left: "50%", delay: "0.6s" },
];

const specs = [
  { key: "AI Engine", val: "DeepFace · Facenet512" },
  { key: "Vector Dimensions", val: "512-D Embeddings" },
  { key: "Liveness Detection", val: "MediaPipe FaceMesh · EAR Blink" },
  { key: "Storage", val: "pgvector on Neon (Serverless)" },
  { key: "Mode", val: "Wall Kiosk · Mobile · Web" },
];

export default function EyeGo() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll("#eyego .fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="eyego-section" id="eyego">
      <div className="container">
        <p className="section-label fade-in">Deep Dive</p>
        <h2 className="section-title fade-in"><span>EyeGo™</span> — The AI at the Gate</h2>
        <p className="section-subtitle fade-in">Powered by DeepFace and Facenet512 neural networks, EyeGo™ identifies individuals in milliseconds with military-grade precision.</p>

        <div className="eyego-inner fade-in">
          <div className="corner-tl"></div>
          <div className="corner-br"></div>
          <div className="eyego-content">
            <div>
              <h3 style={{ fontFamily: "var(--font-head)", fontSize: "28px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "var(--white)", marginBottom: "16px" }}>
                Zero Touch.<br /><span style={{ color: "var(--cyan)" }}>Zero Compromise.</span>
              </h3>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.8, marginBottom: "24px" }}>
                Employees simply walk up to the kiosk. Their face is recognized within 500ms, attendance is marked, and they proceed — no badge tapping, no PIN entry, no queues. For institutions, the same system handles thousands of students effortlessly.
              </p>
              <div className="eyego-specs">
                {specs.map((s) => (
                  <div className="spec-row" key={s.key}>
                    <span className="spec-key">{s.key}</span>
                    <span className="spec-val">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="face-visual">
              <div style={{ position: "absolute", top: "10px", left: 0, fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--cyan)", opacity: 0.7, lineHeight: 1.8 }}>
                CONF: 99.2%<br />LIVENESS: PASS<br />SPOOF: NULL
              </div>
              <div style={{ position: "absolute", top: "10px", right: 0, textAlign: "right", fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--cyan)", opacity: 0.7, lineHeight: 1.8 }}>
                ID: EMP-4821<br />TIME: 09:02:11<br />STATUS: IN
              </div>
              <div className="face-placeholder">
                <div className="face-corners">
                  <div className="fc-tl"></div>
                  <div className="fc-tr"></div>
                  <div className="fc-bl"></div>
                  <div className="fc-br"></div>
                </div>
                <div className="face-scan-line"></div>
                <div className="face-dots">
                  {dots.map((d, i) => (
                    <div key={i} className="face-dot" style={{ top: d.top, left: d.left, animationDelay: d.delay }}></div>
                  ))}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--cyan)", zIndex: 1, position: "relative", textAlign: "center", lineHeight: 1.6 }}>
                  FACE<br />RECOGNITION<br />SCAN
                </div>
                <div className="face-label">SUBJECT IDENTIFIED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
