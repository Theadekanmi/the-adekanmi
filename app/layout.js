import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from "../components/ThemeProvider"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adekanmi Adedigba - Full-Stack Developer Portfolio | Web Development & African Payment Integration",
  description: "Professional Full-Stack Developer specializing in React, Next.js, Python, and African payment gateways. View my portfolio of web applications, APIs, and digital solutions.",
  keywords: ["Full-Stack Developer", "React Developer", "Next.js Developer", "Python Developer", "African Payment Integration", "Web Development", "API Development", "Nigeria Developer"],
  authors: [{ name: "Adekanmi Adedigba" }],
  creator: "Adekanmi Adedigba",
  publisher: "Adekanmi Adedigba",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Adekanmi Adedigba - Full-Stack Developer Portfolio",
    description: "Professional Full-Stack Developer specializing in React, Next.js, Python, and African payment gateways.",
    type: "website",
    locale: "en_US",
    siteName: "Adekanmi Adedigba Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adekanmi Adedigba - Full-Stack Developer Portfolio",
    description: "Professional Full-Stack Developer specializing in React, Next.js, Python, and African payment gateways.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3B82F6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText`}>
        <ThemeProvider>
          <Navbar />
          <div className="pt-20 overflow-x-hidden">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
