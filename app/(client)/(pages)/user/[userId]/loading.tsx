import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="grid place-items-center w-full h-full">
      <Loader2 className="mr-2 h-8 w-8 animate-spin" />
    </div>
  );
};

export default Loading;
