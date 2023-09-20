import Link from "next/link";
import { ModeToggle } from "@/app/(client)/_components/ui/mode-toggle";
import {
  HomeIcon,
  LucideSettings,
  Unlock,
  UserCircle2,
  UserPlus2,
} from "lucide-react";

const SidebarNavLinks = () => {
  const links = [
    {
      name: "Home",
      href: "/",
      icon: HomeIcon,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: UserCircle2,
    },
    {
      name: "Followers",
      href: "/followers",
      icon: UserPlus2,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: LucideSettings,
    },
    {
      name: "Login",
      href: "/login",
      icon: Unlock,
    },
  ];

  return (
    <ul className="space-y-5">
      {links &&
        links.map((link) => {
          const Icon = link.icon;
          return (
            <li key={link.href} className="flex">
              <Icon className="mr-2 h-6 w-6" />
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default SidebarNavLinks;
