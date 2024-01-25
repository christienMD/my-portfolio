import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "MD Christien - Web Developer Portfolio | Showcase of Skills and Projects",
  description:
    "Explore MD Christien's web developer portfolio showcasing a variety of skills, projects, and experiences. Discover innovative solutions and creative designs in web development.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
