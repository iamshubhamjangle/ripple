import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import LoginComponent from "@/app/(client)/(auth)/login/login";

const LoginPage = async ({ searchParams }: any) => {
  const session = await getServerSession();

  if (session) redirect(searchParams?.callbackUrl || "/");

  return <LoginComponent searchParams={searchParams} />;
};

export default LoginPage;
