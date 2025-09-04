// app/layout.tsx
import "../styles/globals.css";
import { ReactNode } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import RatesTicker from "../components/ratesticker";
import Navbar1 from "@/components/test";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="font-sans">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <RatesTicker/>
        <Navbar1/>
        {/* <Navbar/> */}
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
