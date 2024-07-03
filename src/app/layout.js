import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className={`${montserrat.className} bg-dark text-white `}>
        <div className="min-h-screen max-w-7xl mx-auto">
          <Navbar />
          <div className="p-4 md:p-6">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
