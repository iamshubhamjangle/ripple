import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/app/_lib/utils";
import "@/app/(client)/(pages)/globals.css";
import Providers from "@/app/(client)/_components/providers";
import LeftSidebar from "@/app/(client)/_components/LeftSidebar/sidebar";

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
          <div className="px-4 md:container max-w-7xl">
            <main className="flex flex-row gap-1 md:gap-6 h-[100vh] w-full">
              <LeftSidebar />
              <div className="flex-1 overflow-y-auto scrollbar-none px-2">
                {children}
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
