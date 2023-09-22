import MainContent from "@/app/(client)/_components/MainContent/main-content";
import RightSidebar from "@/app/(client)/_components/RightSidebar/right-sidebar";

export default async function Home() {
  return (
    <div className="flex flex-row gap-6">
      <MainContent />
      <RightSidebar />
    </div>
  );
}
