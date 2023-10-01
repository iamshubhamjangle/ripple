"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { FormEvent, useState } from "react";
import { SearchIcon, SendHorizonalIcon, X } from "lucide-react";

import { Button } from "@/app/(client)/_components/ui/button";
import { User } from "@prisma/client";
import SearchItem from "./search-item";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .get("/api/search", {
        params: {
          q: search,
        },
      })
      .then((res) => setUsers(res.data.users))
      .catch((e) => toast.error(e?.response?.data || "Something went wrong!"))
      .finally(() => {});
  };

  const handleCloseSearchItemList = () => {
    setUsers([]);
    setSearch("");
  };

  return (
    <div className="my-4 relative w-full">
      <form onSubmit={handleSearch}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="h-4 w-4" color="grey" />
          </div>
          <input
            type="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search Users"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <div className="absolute inset-y-0 flex items-center right-0 pr-2">
            <Button type="submit" size="icon" variant="outline">
              <SendHorizonalIcon className="h-4 w-4" />
            </Button>
          </div>
          {users && users.length > 0 && (
            <div className="z-20 absolute w-full rounded-md bg-secondary shadow-lg border border-primary p-3 mt-1">
              {users.map((user) => {
                return (
                  <SearchItem
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    identifier={user.identifier}
                    image={user.image}
                  />
                );
              })}
              <div className="flex items-center justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 w-full"
                  onClick={handleCloseSearchItemList}
                >
                  <X size={18} className="mr-2" />
                  <span>Close</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
