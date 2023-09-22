import Following from "@/app/(client)/_components/RightSidebar/following";
import Trending from "@/app/(client)/_components/RightSidebar/trending";

const RightSidebar = () => {
  return (
    <div className="hidden lg:flex flex-col gap-6 mt-4 min-w-[260px] max-w-[260px]">
      <Following />
      <Trending />
    </div>
  );
};

export default RightSidebar;
