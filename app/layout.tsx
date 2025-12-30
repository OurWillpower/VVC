import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ved Vet Care | Intelligent Animal Health",
  description: "Advanced Herbal Solutions for Global Markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
