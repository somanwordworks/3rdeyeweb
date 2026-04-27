import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3rdEye",
  description: "AI-powered security platform",
  icons: {
    icon: "/favicon.png",        // main favicon
    shortcut: "/favicon.png",    // optional
    apple: "/favicon.png",       // for iOS
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}