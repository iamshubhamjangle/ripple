import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import ForgotPassword from "@/app/(client)/(auth)/forgot-password/forgotPassword";

const LoginPage = async ({ searchParams }: any) => {
  const session = await getServerSession();

  if (session) redirect(searchParams?.callbackUrl || "/");

  return <ForgotPassword searchParams={searchParams} />;
};

export default LoginPage;
