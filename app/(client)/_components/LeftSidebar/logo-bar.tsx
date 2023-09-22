import Link from "next/link";
import { LogoIcon } from "../Icons/logoIcon";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center my-5">
      <LogoIcon className="h-8 w-8" />
      <h2 className="hidden md:block font-bold ml-2 pt-1">Ripple</h2>
    </Link>
  );
};

export default Logo;
