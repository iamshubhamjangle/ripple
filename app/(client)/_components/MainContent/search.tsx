import { Input } from "@/app/(client)/_components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="my-2 relative">
      <SearchIcon className="absolute top-3 left-3 w-4 h-4 text-slate-400" />
      <Input type="text" placeholder="      Search Ripples" />
    </div>
  );
};

export default Search;
