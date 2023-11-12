import type { Metadata } from "next";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "IoT",
  description: "IoT app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="grid grid-rows-[max-content_auto_max-content] overflow-hidden h-screen">
          <Header />
          <main className="relative flex bg-slate-100 z-0">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
