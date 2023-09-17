import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex flex-col gap-4">
      <div>{JSON.stringify(session)}</div>
    </main>
  );
}
