import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/logo.png" width={32} height={32} alt="logo" />
      <p className="font-bold text-gray-900">NextAuthDemo</p>
    </Link>
  );
};

export default Logo;
