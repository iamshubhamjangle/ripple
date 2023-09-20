import UserNav from "@/app/(client)/_components/Sidebar/side-bar-bottom";
import SidebarNavLinks from "@/app/(client)/_components/Sidebar/sidebar-nav-links";
import Logo from "./logo-bar";

const Sidebar = () => {
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

export default Sidebar;
