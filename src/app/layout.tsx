import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Socratic Analyst",
  description:
    "A short BI dialogue game about asking better questions before building dashboards.",
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
