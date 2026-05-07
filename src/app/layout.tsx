import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Awzi | Senior Full-Stack Developer & Designer",
  description: "Senior Full-Stack Developer and UI/UX Designer specializing in clean, functional, and visually engaging digital experiences.",
  openGraph: {
    title: "Awzi | Senior Full-Stack Developer & Designer",
    description: "Building high-end digital experiences with React, Next.js, and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
