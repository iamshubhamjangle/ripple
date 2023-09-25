import CreatePostForm from "@/app/(client)/_components/MainContent/CreatePost/create-post-form";
import { serverAuth } from "@/app/_lib/serverAuth";

const CreatePost = async () => {
  const session = await serverAuth();
  if (!session) return null;

  return <CreatePostForm />;
};

export default CreatePost;
