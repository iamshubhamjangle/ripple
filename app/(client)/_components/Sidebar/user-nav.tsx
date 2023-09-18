"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/(client)/_components/ui/dropdown-menu";
import UserNavProfilePic from "@/app/(client)/_components/Sidebar/user-nav-profile-pic";
import { HelpCircle, LogOut, MoreVertical } from "lucide-react";

const UserNav = () => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center ml-auto gap-3">
          <UserNavProfilePic />
          <div className="flex flex-col">
            <span>Shubham Jangle</span>
            <span>@shubhamjangle</span>
          </div>
          <MoreVertical />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
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
