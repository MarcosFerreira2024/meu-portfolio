import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Loader from "./components/Loader";

const Instrument = Instrument_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio de Marcos Ferreira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Instrument.variable}  font-sans antialiased bg-slate-100  ease-in transition-all duration-300 select-text `}
      >
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}
