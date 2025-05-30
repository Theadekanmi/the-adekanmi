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
  title: "THE-ADEKANMI-PORTFOLIO",
  description: "portfolio",
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
