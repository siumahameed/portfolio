import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Sium Ahameed | AI/ML Engineer & Data Scientist",
  description:
    "Portfolio of Sium Ahameed, a Statistics undergraduate focused on machine learning, AI engineering, data science, and intelligent systems.",
  openGraph: {
    title: "Sium Ahameed | AI/ML Engineer & Data Scientist",
    description:
      "Building intelligent systems from data to deployment. Machine learning, AI engineering, and data science.",
    url: "https://siumahameed.github.io/portfolio/",
    siteName: "Sium Ahameed",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://siumahameed.github.io/portfolio/images/profile.jpg.jpeg",
        width: 512,
        height: 512,
        alt: "Sium Ahameed Bhuyan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sium Ahameed | AI/ML Engineer & Data Scientist",
    description:
      "Building intelligent systems from data to deployment. Machine learning, AI engineering, and data science.",
    images: ["https://siumahameed.github.io/portfolio/images/profile.jpg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
            __html: "(function(){try{var t=localStorage.getItem('theme');if(!t||t==='dark')document.documentElement.classList.add('dark')}catch(e){}})()",
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <BackgroundLoader />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
