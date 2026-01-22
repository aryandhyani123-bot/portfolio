import type { Metadata } from "next";
import "./globals.css";
import { inter, outfit } from "./fonts";
import { cn } from "@/lib/utils";
import CursorShadow from "@/components/CursorShadow";

export const metadata: Metadata = {
  title: "Aryan | Portfolio",
  description: "Java Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, outfit.variable, "font-sans antialiased bg-background text-foreground selection:bg-cyan-500/30")}>
        <CursorShadow />
        {children}
      </body>
    </html>
  );
}
