"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import useProductFilter from "../../hooks/useProductFilter";

interface Props {
  category?: string;
}

function ProductList({ category }: Props) {
  const [filters] = useProductFilter();
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.products.getMany.queryOptions({ category, ...filters })
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {data?.docs.map((products) => (
        <div key={products.id} className="border rounded-md bg-white p-2">
          <h2 className="text-xl font-medium">{products.name}</h2>
          <p>${products.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

export const ProductlIstSkeleton = () => {
  return <div>Loading....</div>;
};
