import type { Metadata } from "next";
import { Inter } from "next/font/google";

import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Craft Hub",
  description: "Web design | Development Agency specializing in Framer, WebFlow and custom web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <>
            {children}
            <Footer />
          </>
        </ThemeProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
