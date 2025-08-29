// app/layout.tsx
import "../styles/globals.css";
import { ReactNode } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>   {}
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
