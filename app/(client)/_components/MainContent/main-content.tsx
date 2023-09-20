import CreatePost from "@/app/(client)/_components/MainContent/CreatePost/create-post";
import Feed from "@/app/(client)/_components/MainContent/Feed/feed";
import Search from "@/app/(client)/_components/MainContent/search";

const MainContent = () => {
  return (
    <div>
      <Search />
      <CreatePost />
      <Feed />
    </div>
  );
};

export default MainContent;
