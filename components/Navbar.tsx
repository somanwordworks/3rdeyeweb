"use client";
import Image from "next/image";

export default function Navbar() {
  const scrollToDemo = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className="nav-logo">
        <Image src="/logo.png" alt="3rdEye" width={120} height={38} priority />
      </div>
      <ul className="nav-links">
        <li><a href="#about">Overview</a></li>
        <li><a href="#modules">Modules</a></li>
        <li><a href="#eyego">EyeGo™</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#for">Industries</a></li>
      </ul>
      <button className="nav-cta" onClick={scrollToDemo}>
        Request Demo
      </button>
    </nav>
  );
}
