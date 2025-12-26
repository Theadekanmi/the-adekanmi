import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import ClientOnly from "../components/ClientOnly";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Adekanmi Adedigba — Full‑Stack Developer Portfolio",
  description: "Full‑Stack developer building fast web apps with React, Next.js, and Python. African payment integrations included.",
  keywords: ["Full-Stack Developer", "React Developer", "Next.js Developer", "Python Developer", "African Payment Integration", "Web Development", "API Development", "Nigeria Developer"],
  authors: [{ name: "Adekanmi Adedigba" }],
  creator: "Adekanmi Adedigba",
  publisher: "Adekanmi Adedigba",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Adekanmi Adedigba — Full‑Stack Developer Portfolio",
    description: "Full‑Stack developer building fast web apps with React, Next.js, and Python.",
    type: "website",
    locale: "en_US",
    siteName: "Adekanmi Adedigba Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adekanmi Adedigba — Full‑Stack Developer Portfolio",
    description: "Full‑Stack developer building fast web apps with React, Next.js, and Python.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3B82F6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="msvalidate.01" content="259024B2A7C1EC254C50B67449B0B88D" />
        <meta name="google-site-verification" content="wgvyBktuTfGQQ9-N_SgILGggi7TfUw-U8H_EiAqPt_o" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        <ClientOnly>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
