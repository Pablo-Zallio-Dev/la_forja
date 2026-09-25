import type { Metadata } from "next";
import { Archivo_Black, Barlow } from "next/font/google";
import "./globals.css";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";



const barlow = Barlow({
      variable: "--font-barlow",
      subsets: ["latin"],
      weight: ["100", "400"]
});

const archivoBlack = Archivo_Black({
      variable: "--font-archivo-black",
      subsets: ["latin"],
      weight: ["400"]
})



export const metadata: Metadata = {
      title: "La Forja - Barberia y peluqueria",
      description: "Barberia y peluqueria masculina",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
      return (
            <html
                  lang="en"
                  className={` ${barlow.variable} ${archivoBlack.variable} scroll-smooth h-full antialiased`}
            >
                  <body className="min-h-full flex flex-col">
                        <Header />
                        <main>
                              {children}

                        </main>
                        <Footer />
                  </body>
            </html>
      );
}
