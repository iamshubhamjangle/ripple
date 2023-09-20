import LeftSidebar from "@/app/(client)/_components/LeftSidebar/sidebar";
import MainContent from "@/app/(client)/_components/MainContent/main-content";
import RightSidebar from "@/app/(client)/_components/RightSidebar/right-sidebar";

export default async function Home() {
  return (
    <main className="flex flex-row">
      <div className="w-1/5 h-[100vh] px-4">
        <LeftSidebar />
      </div>
      <div className="w-3/5 h-[100vh] border-l border-r px-8 overflow-y-auto scrollbar-none">
        <MainContent />
      </div>
      <div className="w-1/4 h-[100vh] px-4">
        <RightSidebar />
      </div>
    </main>
  );
}
