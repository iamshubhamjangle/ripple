"use client";

import { signOut } from "next-auth/react";
import { HelpCircle, LogOut, MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/(client)/_components/ui/dropdown-menu";
import { ModeToggle } from "@/app/(client)/_components/ui/mode-toggle";
import UserNavProfilePic from "@/app/(client)/_components/LeftSidebar/user-nav-profile-pic";

interface UserNavProps {
  session: any;
}

const UserNav: React.FC<UserNavProps> = ({ session }) => {
  if (!session) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center my-8">
          <UserNavProfilePic />
          <div className="hidden md:flex">
            <div className="flex flex-col overflow-hidden max-w-[160px]">
              <span className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                {session.user.name}
              </span>
              <span className="text-sm text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                @{session.user.identifier}
              </span>
            </div>
            <MoreHorizontal />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <ModeToggle />
        <DropdownMenuItem onClick={() => {}}>
          <HelpCircle className="mr-2" /> Help & Support
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
