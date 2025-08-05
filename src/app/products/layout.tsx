import type { Metadata } from "next";
import { roboto } from "@/app/ui/fonts";
import Header from "@/app/ui/component/header/Header";
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
    <>
      <Header />
      <main className={`pt-32 p-4 ${roboto.className}`}>
        {children}
      </main>
    </>
  );
}