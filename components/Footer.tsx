import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div style={{ marginBottom: "16px" }}>
            <Image src="/logo.png" alt="3rdEye" width={120} height={42} />
          </div>
          <p>AI-powered security and access control for buildings, campuses, and enterprises. AI Vision. Smarter Future.</p>
          <p style={{ marginTop: "12px", fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--cyan-dim)", letterSpacing: "1px" }}>
            A Pagami Group Product
          </p>
        </div>

        <div className="footer-col">
          <h5>Platform</h5>
          <ul>
            <li><Link href="#modules">Visitor Management</Link></li>
            <li><Link href="#modules">Delivery Tracking</Link></li>
            <li><Link href="#eyego">EyeGo™ + HR</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Deploy</h5>
          <ul>
            <li><Link href="#for">Corporate Buildings</Link></li>
            <li><Link href="#for">Industrial Parks</Link></li>
            <li><Link href="#for">Educational Campuses</Link></li>
            <li><Link href="#for">Healthcare</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li><Link href="#cta">Request Demo</Link></li>
            <li><a href="mailto:noreply@3rdeyeapp.in">noreply@3rdeyeapp.in</a></li>
            <li><a href="https://3rdeyeapp.in" target="_blank" rel="noreferrer">3rdeyeapp.in</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 <span>Pagami Group</span>. All rights reserved.</p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "2px" }}>
          3RDEYE v2.0 · SYSTEM ONLINE
        </p>
      </div>
    </footer>
  );
}
