import type { Metadata } from "next";

import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SessionWrapper } from "./components/SessionWrapper";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Post Sphere",
  description:
    "Post Sphere is a dynamic platform where users can explore, share, and engage with diverse posts on a variety of topics. Join the community to discover thought-provoking content, connect with authors, and stay informed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />

      </head>
      <SessionWrapper>
        <body className={`${poppins.className} antialiased`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </SessionWrapper>
    </html>
  );
}
