import UserNav from "@/app/(client)/_components/LeftSidebar/side-bar-bottom";
import SidebarNavLinks from "@/app/(client)/_components/LeftSidebar/sidebar-nav-links";
import Logo from "./logo-bar";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="space-y-10">
        <Logo />
        <SidebarNavLinks />
      </div>
      <UserNav />
    </div>
  );
};

export default LeftSidebar;
