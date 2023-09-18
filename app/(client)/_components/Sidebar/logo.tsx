import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center my-2">
      <Image src="/logo.png" width={32} height={32} alt="logo" />
      <p className="font-bold text-gray-900 ml-2 pt-1">Ripple</p>
    </Link>
  );
};

export default Logo;
