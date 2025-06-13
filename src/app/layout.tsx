import type { Metadata } from "next";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Malaria Analysis",
  description: "A website about Malaria Analysis conducted by WACBIP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      > */}
      <body>{children}</body>
      {/* </ThemeProvider> */}
    </html>
  );
}
