import { Category } from "@/payload-types";
import React from "react";
import CategoryDropdown from "./CategoryDropdown";

interface Props {
  data: any;
}
function Categories({ data }: Props) {
  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center ">
        {data.map((category: Category) => (
          <div key={category.id}>
            <CategoryDropdown
              category={category}
              isActive={false}
              isNavigationHovered={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
