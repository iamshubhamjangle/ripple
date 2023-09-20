import Following from "@/app/(client)/_components/RightSidebar/following";
import Trending from "@/app/(client)/_components/RightSidebar/trending";

const RightSidebar = () => {
  return (
    <div className="h-[100vh] overflow-y-auto scrollbar-none">
      <Following />
      <Trending />
    </div>
  );
};

export default RightSidebar;
