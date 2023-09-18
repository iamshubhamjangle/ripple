import UserNav from "@/app/(client)/_components/Sidebar/user-nav";
import SidebarNavLinks from "@/app/(client)/_components/Sidebar/sidebar-nav-links";
import Logo from "./logo-bar";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Logo />
        <SidebarNavLinks />
      </div>
      <UserNav />
    </div>
  );
};

export default Sidebar;
