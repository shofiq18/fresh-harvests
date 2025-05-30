
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProviderWrapper from "./providerWrapper";
import Navbar from "@/components/Navber";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fresh Harvests",
  description: "A Next.js app for fresh produce delivery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ProviderWrapper>
        <Navbar />
          {children}
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
