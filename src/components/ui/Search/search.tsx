import React, { useState } from "react";
import { Input } from "@/components/ui/Input/input";
import { Button } from "@/components/ui/Button/button";
import { Search } from "lucide-react";
import { fetchFilesByName } from "@/hooks/use-search";
import { useRouter } from "next/navigation";
import { getFileByName } from "@/app/api/ApiSearch";

function SearchFile() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    try {
      const files = await getFileByName(query);
      // Do something with the fetched files, e.g., display them or navigate to a new page
      console.log(files);
      // Construct the new URL with the query parameter
      const newUrl = `/search?query=${query}`;
      // Navigate to the new URL or perform any other action
      router.push(newUrl);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  return (
    <div className="flex items-center w-full max-w-2xl">
      <Input
        type="text"
        placeholder="Search in Drive"
        className="mr-4 text-lg"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        size="icon"
        variant="ghost"
        className="h-12 w-12 rounded-full"
        onClick={handleSearch}
      >
        <Search className="h-6 w-6" />
      </Button>
    </div>
  );
}

export default SearchFile;
