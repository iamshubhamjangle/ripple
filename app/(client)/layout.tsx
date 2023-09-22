import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/(client)/globals.css";
import { cn } from "@/app/_lib/utils";
import Providers from "@/app/(client)/_components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ripple",
  description: "A new world of Rippling!",
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
          <div className="px-4 md:container max-w-7xl">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
