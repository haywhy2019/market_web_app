"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";

interface Props {
  category?: string;
}

function ProductList({ category }: Props) {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.products.getMany.queryOptions({ category })
  );
  return (
    <div>
      {JSON.stringify(data, null, 2)}
      ProductList
    </div>
  );
}

export default ProductList;

export const ProductlIstSkeleton = () => {
  return <div>Loading....</div>;
};
