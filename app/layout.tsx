import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { sora } from "./fonts";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HelpMeOut",
  description: "Screen Recorder Chrome Extension",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <main className="relative min-h-screen">
          {/* <Nav /> */}
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
