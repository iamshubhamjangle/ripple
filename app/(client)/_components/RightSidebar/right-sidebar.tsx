import Trending from "@/app/(client)/_components/RightSidebar/trending";

const RightSidebar = () => {
  return (
    <div className="hidden lg:flex my-4 min-w-[260px] max-w-[260px]">
      <Trending />
    </div>
  );
};

export default RightSidebar;
