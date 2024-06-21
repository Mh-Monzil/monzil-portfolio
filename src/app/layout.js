
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Monzil Portfolio",
  description: "Monzil's Awesome Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-dark text-white min-h-screen max-w-7xl mx-auto p-4 md:p-6 lg:p-8`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
