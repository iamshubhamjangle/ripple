import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import LoginComponent from "@/app/(client)/(auth)/login/login";

const LoginPage = async ({ searchParams }: any) => {
  const session = await getServerSession();

  if (session) redirect(searchParams?.callbackUrl || "/");

  let IS_EMAIL_SERVICE_ENABLED = true;
  if (process.env.IS_EMAIL_SERVICE_ENABLED === "false")
    IS_EMAIL_SERVICE_ENABLED = false;

  return (
    <LoginComponent
      searchParams={searchParams}
      IS_EMAIL_SERVICE_ENABLED={IS_EMAIL_SERVICE_ENABLED}
    />
  );
};

export default LoginPage;
