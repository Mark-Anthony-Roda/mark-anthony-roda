import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import DefaultLayout from "@/components/layout/DefaultLayout";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark Anthony Roda",
  description: "Mark's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
