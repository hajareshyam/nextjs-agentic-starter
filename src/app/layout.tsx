import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Boilerplate",
  description: "Basic Next.js app scaffold"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
