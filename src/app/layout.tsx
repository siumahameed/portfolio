import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk, Exo_2 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackgroundLoader } from "@/components/BackgroundLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#08090B" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://siumahameed.me"),
  title: "Sium Ahameed - AI/ML and Data Science",
  description:
    "Portfolio of Sium Ahameed, a Statistics undergraduate focused on machine learning, AI engineering, data science, and intelligent systems.",
  authors: [{ name: "Sium Ahameed Bhuyan" }],
  keywords: ["Sium Ahameed", "Machine Learning", "Data Science", "AI Engineering", "Statistics", "Portfolio"],
  alternates: {
    canonical: "https://siumahameed.me/",
  },
  openGraph: {
    title: "Sium Ahameed - AI/ML and Data Science",
    description:
      "Building intelligent systems from data to deployment. Machine learning, AI engineering, and data science.",
    url: "https://siumahameed.me/",
    siteName: "Sium Ahameed",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://siumahameed.me/images/profile.jpg",
        width: 512,
        height: 512,
        alt: "Sium Ahameed Bhuyan",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Sium Ahameed - AI/ML and Data Science",
    description:
      "Building intelligent systems from data to deployment. Machine learning, AI engineering, and data science.",
    images: ["https://siumahameed.me/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Sium Ahameed Bhuyan",
      url: "https://siumahameed.me/",
      jobTitle: "ML / AI Engineering / Data Science",
      address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
    },
    {
      "@type": "WebSite",
      name: "Sium Ahameed",
      url: "https://siumahameed.me/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches;if(t==='light'||(!t&&m)){/* light */}else{document.documentElement.classList.add('dark')}}catch(e){}document.documentElement.classList.add('js')})()",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${exo2.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <BackgroundLoader />
          <Navbar />
          <main id="main-content" className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
