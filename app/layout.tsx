import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider  from "./components/themeProvider";
import "../public/css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexcent",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ThemeProvider
        attribute="class"
        defaultTheme="light">
        {children}
      </ThemeProvider></body>
    </html>
  );
}
