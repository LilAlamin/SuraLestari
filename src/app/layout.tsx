import type { Metadata } from "next";
import { Roboto, Roboto_Serif, Syncopate } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ChatBot } from "@/components/ChatBot";
import { SplashWrapper } from "@/components/SplashWrapper";

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SuraLestari — Eco Journey Surakarta",
  description:
    "SuraLestari mengajak Anda mengenal destinasi ekowisata di Surakarta. Nikmati keindahan alam, lestarikan budaya lokal, dan dukung UMKM melalui perjalanan wisata yang bertanggung jawab.",
  icons: {
    icon: "/seo/logo.svg",
    apple: "/seo/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoSerif.variable} ${roboto.variable} ${syncopate.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SplashWrapper>
          <Navbar />
          <ChatBot />
          {children}
        </SplashWrapper>
      </body>
    </html>
  );
}
