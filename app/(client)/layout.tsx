import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/(client)/globals.css";
import { cn } from "@/app/_lib/utils";
import Navbar from "@/app/(client)/_components/navbar";
import Providers from "@/app/(client)/_components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextAuthDemo",
  description: "NextAuthDemo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen")}>
        <Providers>
          <Navbar />
          <div className="container max-w-7xl mx-auto py-12">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
