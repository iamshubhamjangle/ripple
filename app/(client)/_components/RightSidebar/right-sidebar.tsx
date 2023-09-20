import Following from "@/app/(client)/_components/RightSidebar/following";
import Trending from "@/app/(client)/_components/RightSidebar/trending";

const RightSidebar = () => {
  return (
    <div className="flex flex-col">
      <Following />
      <Trending />
    </div>
  );
};

export default RightSidebar;
