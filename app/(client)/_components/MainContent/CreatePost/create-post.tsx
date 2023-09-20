import CreatePostForm from "@/app/(client)/_components/MainContent/CreatePost/create-post-form";
import { getServerSessionWithoutUser } from "@/app/_lib/serverAuth";

const CreatePost = async () => {
  const session = await getServerSessionWithoutUser();
  if (!session) return null;

  return <CreatePostForm />;
};

export default CreatePost;
