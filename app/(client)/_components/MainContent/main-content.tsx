import CreatePost from "@/app/(client)/_components/MainContent/CreatePost/create-post";
import Search from "@/app/(client)/_components/MainContent/search";
import Feed from "@/app/(client)/_components/MainContent/Feed/feed";

const MainContent = () => {
  return (
    <div className="flex flex-col">
      <Search />
      <CreatePost />
      <Feed />
    </div>
  );
};

export default MainContent;
