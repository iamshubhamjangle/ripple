import { Skeleton } from "@/app/(client)/_components/ui/skeleton";

const Page = () => {
  return (
    <div className="container py-6 px-2 md:px-4">
      <div className="relative flex flex-col items-center">
        <Skeleton className="h-32 w-full rounded-xl mt-1" />
        <div className="mt-16 flex flex-col items-center">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
        <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <Skeleton className="h-10 w-[50px]" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Skeleton className="h-10 w-[50px]" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Skeleton className="h-10 w-[50px]" />
          </div>
        </div>
        <div className="mt-6 mb-3 flex flex-wrap gap-2 md:gap-10">
          <Skeleton className="h-20 w-[100px]" />
          <Skeleton className="h-20 w-[100px]" />
        </div>
        <div>
          <Skeleton className="h-10 w-[100px]" />
          <div className="h-full space-y-4 my-4">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
