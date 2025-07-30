import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./ui/fonts";
import Header from "./ui/component/header/Header";
export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description:
    "Handcrafted Haven is an innovative web application that aims to provide a platform for artisans and crafters to showcase and sell their unique handcrafted items. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
