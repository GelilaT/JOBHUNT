'use client'
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { Work_Sans } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Provider } from "react-redux";
import store from "@/redux/store";
import "@/lib/utils/fontawesome";
import Footer from "@/components/ui/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'], 
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '600'], 
});

const metadata: Metadata = {
  title: "JOBHUNT",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">
      <body
        className={`${workSans.className} ${poppins.className} antialiased`}
        >
        <Provider store={store}>
          
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>

  );
}
