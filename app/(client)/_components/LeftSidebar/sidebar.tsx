import UserNav from "@/app/(client)/_components/LeftSidebar/side-bar-bottom";
import SidebarNavLinks from "@/app/(client)/_components/LeftSidebar/sidebar-nav-links";
import Logo from "./logo-bar";
import { serverAuth } from "@/app/_lib/serverAuth";

const LeftSidebar = async () => {
  const session = await serverAuth();

  return (
    <div className="flex flex-col justify-between max-w-[220px]">
      <div className="space-y-10">
        <Logo />
        <SidebarNavLinks />
      </div>
      <UserNav session={session} />
    </div>
  );
};

export default LeftSidebar;
