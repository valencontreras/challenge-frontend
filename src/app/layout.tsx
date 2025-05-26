import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Layout } from "components";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Challenge Frontend",
  description: "Challenge Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body className={`${nunito.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
