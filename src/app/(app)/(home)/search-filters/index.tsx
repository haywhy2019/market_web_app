import React from "react";
import SearchInput from "./Search-input";
import Categories from "./Categories";

interface Props {
  data: any;
}

function SearchFilters({ data }: Props) {
    return <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
        <SearchInput />
        <Categories data={ data} />
    </div>;
}

export default SearchFilters;
