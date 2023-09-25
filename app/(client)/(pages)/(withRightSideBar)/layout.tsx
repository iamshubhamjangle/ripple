import type { Metadata } from "next";
import RightSidebar from "@/app/(client)/_components/RightSidebar/right-sidebar";

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
    <div className="flex flex-row gap-6">
      <div className="w-full">{children}</div>
      <RightSidebar />
    </div>
  );
}
