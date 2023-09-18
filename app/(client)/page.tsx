import Sidebar from "@/app/(client)/_components/Sidebar/sidebar";
import MainContent from "@/app/(client)/_components/MainContent/main-content";
import RightSidebar from "@/app/(client)/_components/RightSidebar/right-sidebar";

export default async function Home() {
  return (
    <main className="flex flex-row">
      <div className="bg-purple-100 w-1/3 h-[100vh]">
        <Sidebar />
      </div>
      <div className="bg-green-100 w-3/4 h-[100vh]">
        <MainContent />
      </div>
      <div className="bg-orange-100 w-1/3 h-[100vh]">
        <RightSidebar />
      </div>
    </main>
  );
}
