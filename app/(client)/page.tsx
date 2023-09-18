import Sidebar from "@/app/(client)/_components/Sidebar/sidebar";
import MainContent from "@/app/(client)/_components/MainContent/main-content";
import RightSidebar from "@/app/(client)/_components/RightSidebar/right-sidebar";

export default async function Home() {
  return (
    <main className="flex flex-row">
      <div className="w-1/3 h-[100vh] px-8">
        <Sidebar />
      </div>
      <div className="w-3/4 h-[100vh] border-l-2 border-r-2 px-8">
        <MainContent />
      </div>
      <div className="w-1/3 h-[100vh] px-8">
        <RightSidebar />
      </div>
    </main>
  );
}
