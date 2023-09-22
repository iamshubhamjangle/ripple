import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Register from "@/app/(client)/(auth)/register/register";

const RegisterPage = async ({ searchParams }: any) => {
  const session = await getServerSession();

  if (session) redirect(searchParams?.callbackUrl || "/");

  return <Register searchParams={searchParams} />;
};

export default RegisterPage;
