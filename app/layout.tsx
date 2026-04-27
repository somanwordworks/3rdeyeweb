import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3rdEye — AI Vision. Smarter Future.",
  description: "3rdEye is a next-generation AI-powered security and access control platform — combining facial recognition, visitor management, and smart HR attendance into one unified system.",
  keywords: "AI security, facial recognition, visitor management, access control, HR attendance, EyeGo, 3rdEye, Pagami Group",
  authors: [{ name: "Pagami Group" }],
  openGraph: {
    title: "3rdEye — AI Vision. Smarter Future.",
    description: "AI-powered security and access control for buildings, campuses, and enterprises.",
    url: "https://3rdeyeapp.in",
    siteName: "3rdEye",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
