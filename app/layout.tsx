import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import FloatingControls from "@/components/floating-controls";
import ThemeContextProvider from "@/context/theme-context";
import { LanguageProvider } from "@/context/language-context";
import HtmlLang from "@/components/html-lang";
import SkipLink from "@/components/skip-link";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hudson Ferraz | Full-Stack Developer",
  description:
    "Full-stack developer specializing in high-frequency trading and market-making. TypeScript, Python, exchange integrations, and production trading infrastructure.",
  keywords: [
    "Hudson Ferraz",
    "Full-Stack Developer",
    "TypeScript",
    "Python",
    "High-Frequency Trading",
    "Market Making",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Hudson Ferraz" }],
  creator: "Hudson Ferraz",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://hudson-portfolio-website.vercel.app",
    title: "Hudson Ferraz | Full-Stack Developer",
    description:
      "Full-stack developer specializing in high-frequency trading and market-making. TypeScript, Python, exchange integrations, and production trading infrastructure.",
    siteName: "Hudson Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hudson Ferraz | Full-Stack Developer",
    description:
      "Full-stack developer specializing in high-frequency trading and market-making. TypeScript, Python, exchange integrations, and production trading infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <LanguageProvider>
            <SkipLink />
            <HtmlLang />
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />

              <Toaster position="top-right" />
              <FloatingControls />
            </ActiveSectionContextProvider>
          </LanguageProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
