import LeftSidebar from "@/app/(client)/_components/LeftSidebar/sidebar";
import MainContent from "@/app/(client)/_components/MainContent/main-content";
import RightSidebar from "@/app/(client)/_components/RightSidebar/right-sidebar";

export default async function Home() {
  return (
    <main className="flex flex-row gap-1 md:gap-6 h-[100vh] w-full">
      <LeftSidebar />
      <div className="flex-1 overflow-y-auto scrollbar-none">
        <div className="flex flex-row gap-6">
          <MainContent />
          <RightSidebar />
        </div>
      </div>
    </main>
  );
}
