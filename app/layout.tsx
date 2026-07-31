import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "How Are You Feeling Today?",
  description: "A small interactive emotions quiz with original characters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
