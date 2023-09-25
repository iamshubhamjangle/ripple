import type { Metadata } from "next";
import LeftSidebar from "@/app/(client)/_components/LeftSidebar/sidebar";

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
    <>
      <div className="px-4 md:container max-w-7xl">
        <main className="flex flex-row gap-1 md:gap-6 h-[100vh] w-full">
          <LeftSidebar />
          <div className="flex-1 overflow-y-auto scrollbar-none px-2">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
