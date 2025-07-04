"use client";
import React, { useState } from "react";
// import { CustomCategory } from "../types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { CategoriesGetManyOutput } from "@/modules/categories/server/types";
import { CustomCategory } from "../types";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
interface Props {
  open: boolean;
  onOpenChange: (ope: boolean) => void;
}

function CategoriesSidebar({ open, onOpenChange }: Props) {
  const trpc = useTRPC();
  const {data} = useQuery(trpc.categories.getMany.queryOptions());
  const router = useRouter();
  const [parentCategory, setParentCategory] =
    useState<CategoriesGetManyOutput | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    CategoriesGetManyOutput[1] | null
  >(null);

  // if we have parent category show those otherwise show root category
  const currentCategories = parentCategory ?? data ?? [];

  const handleOpenChange = (open: boolean) => {
    setSelectedCategory(null);
    setParentCategory(null);
    onOpenChange(open);
  };
  const handleCategoryClick = (category: CategoriesGetManyOutput[1]) => {
    if (category.subcategories && category.subcategories.length > 0) {
      setParentCategory(category.subcategories as unknown as CategoriesGetManyOutput);
      setSelectedCategory(category);
    } else {
      //this is a leaf category (no sub category)
      if (parentCategory && selectedCategory) {
        // this is a subcategory - navigate to /category/subcategory
        router.push(`/${selectedCategory.slug}/${category.slug}`);
      } else {
        // this is a main category - navigate to /category
        if (category.slug === "all") {
          router.push("/");
        } else {
          router.push(`/${category.slug}`);
        }
      }
      handleOpenChange(false);
    }
  };

  const handleBackClick = () => {
    if (parentCategory) {
      setParentCategory(null);
      setSelectedCategory(null);
    }
  };
  const backgroundColor = selectedCategory?.color || "white";
  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent
        side="left"
        className="p-0 transition-none"
        style={{ background: backgroundColor }}
      >
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {parentCategory && (
            <button
              onClick={() => handleBackClick()}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium cursor-pointer"
            >
              <ChevronLeftIcon className="size-4 mr-2" />
              Back
            </button>
          )}
          {currentCategories.map((category) => (
            <button
              className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center text-base font-medium cursor-pointer"
              key={category.slug}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
              {category.subcategories && category.subcategories.length > 0 && (
                <ChevronRightIcon className="size-4" />
              )}
            </button>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export default CategoriesSidebar;
