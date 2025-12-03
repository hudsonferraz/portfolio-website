import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { LanguageProvider } from "@/context/language-context";
import LanguageSwitcher from "@/components/language-switcher";
import HtmlLang from "@/components/html-lang";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hudson | Personal Portfolio",
  description:
    "I'm a beginner front-end developer with yet no experience but a lot of passion and looking to improve my skills daily",
  keywords: [
    "Hudson Ferraz",
    "Front-end Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Hudson Ferraz" }],
  creator: "Hudson Ferraz",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://hudson-portfolio-website.vercel.app",
    title: "Hudson | Personal Portfolio",
    description:
      "I'm a beginner front-end developer with yet no experience but a lot of passion and looking to improve my skills daily",
    siteName: "Hudson Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hudson | Personal Portfolio",
    description:
      "I'm a beginner front-end developer with yet no experience but a lot of passion and looking to improve my skills daily",
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
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gray-900 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <LanguageProvider>
            <HtmlLang />
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />

              <Toaster position="top-right" />
              <ThemeSwitch />
              <LanguageSwitcher />
            </ActiveSectionContextProvider>
          </LanguageProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
