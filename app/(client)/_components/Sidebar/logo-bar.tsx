import Link from "next/link";
import { LogoIcon } from "../Icons/logoIcon";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center my-2">
      <LogoIcon className="h-8 w-8" />
      <p className="font-bold ml-2 pt-1">Ripple</p>
    </Link>
  );
};

export default Logo;
