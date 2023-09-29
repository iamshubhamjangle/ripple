import { Skeleton } from "@/app/(client)/_components/ui/skeleton";

const Page = () => {
  return (
    <div className="h-full w-full">
      <Skeleton className="h-6 w-full rounded-sm" />
      <Skeleton className="my-4 h-12 w-full rounded-sm" />
      <Skeleton className="my-4 h-12 w-full rounded-sm" />
    </div>
  );
};

export default Page;
