import { MainNav } from "@/app/(client)/_components/main-nav";
import { UserNav } from "@/app/(client)/_components/user-nav";
import Logo from "@/app/(client)/_components/logo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/auth";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Logo />
        <div className="ml-auto flex items-center space-x-4">
          {!session && <MainNav className="mx-6" />}
          {session && <UserNav />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
