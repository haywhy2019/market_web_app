import React from "react";
import SearchInput from "./Search-input";
import Categories from "./Categories";
import { CustomCategory } from "../types";

interface Props {
  data: CustomCategory[];
}

function SearchFilters({ data }: Props) {
    return (
      <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
        <SearchInput data={ data} />
        <div className="hidden lg-block ">
          <Categories data={data} />
        </div>
      </div>
    );
}

export default SearchFilters;
