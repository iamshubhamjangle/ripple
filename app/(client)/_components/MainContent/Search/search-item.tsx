import Link from "next/link";
import { getInitials } from "@/app/_lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/(client)/_components/ui/avatar";

interface SearchItemProps {
  id: string;
  identifier: string;
  name: string | null;
  image: string | null;
}

const SearchItem: React.FC<SearchItemProps> = ({
  id,
  identifier,
  image,
  name,
}) => {
  return (
    <Link key={id} href={`/user/${id}`} prefetch={false}>
      <div className="flex items-center py-2">
        <Avatar className="h-8 w-8 rounded-full border border-gray-600 mr-2">
          <AvatarImage src={image || undefined} alt="user avatar" />
          <AvatarFallback>{getInitials(name || "")}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col overflow-hidden max-w-[160px]">
          <span className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
            {name}
          </span>
          <span className="text-sm text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
            @{identifier}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SearchItem;
