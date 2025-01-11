
"use client";
import { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "@/context/theme";
import TopNav from "@/components/nav/TopNav";
import { Toaster } from "react-hot-toast";

import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme ="dark">
      <SessionProvider>
        <ThemeProvider>
          <body>
            <TopNav />
            <Toaster />
            {children}
          </body>
        </ThemeProvider>
      </SessionProvider>
      
    </html>
  );
}
