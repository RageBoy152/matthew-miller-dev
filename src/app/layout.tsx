// fonts and css
import { Space_Mono, Kanit, Blinker } from "next/font/google";
import "./globals.css";

// types
import { ReactNode } from "react";
import { Metadata } from "next";


// init fonts

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"]
});
const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});
const blinker = Blinker({
  variable: "--font-blinker",
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"]
});


// define global metadata

export const metadata: Metadata = {
  metadataBase: new URL('https://matthewmillerdev.netlify.app'),
  title: "Matthew Miller Dev",
  description: "Frontend developer experienced in React.JS, Next.JS and building beautiful UI/UX.",
  keywords: [
    "Frontend Developer",
    "Web Development",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "UI Design",
    "UX Design",
    "Responsive Design",
    "Modern Web Apps",
    "Tailwind CSS",
    "Component-Based Design",
    "Web Performance",
    "Clean Code",
    "Mobile-First Design",
    "SEO Friendly",
    "Accessible Web Design",
    "Single Page Applications",
    "Developer Portfolio",
    "Matthew Miller"
  ],
  openGraph: {
    images: "/opengraph-image.png"
  }
};


// export root layout

export default function RootLayout({ children }: { children: Readonly<ReactNode> }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceMono.variable} ${kanit.variable} ${blinker.variable} antialiased bg-black text-light-gray font-blinker`}>
        {children}
      </body>
    </html>
  );
}
