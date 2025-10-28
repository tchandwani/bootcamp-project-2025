import type { Metadata } from "next"; // Object to set metadata
import { Inter } from "next/font/google"; // You can change the font to anything you want.
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Trisha's Personal Website",
  description: "A personal website for Trisha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
		// returns boilerplate
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}