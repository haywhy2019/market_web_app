import ProductList, {
  ProductlIstSkeleton,
} from "@/modules/products/ui/components/ProductList";
import { caller, getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";

interface Props {
  params: Promise<{
    subcategory: string;
  }>;
}
async function Page({ params }: Props) {
  const { subcategory } = await params;
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.products.getMany.queryOptions({ category:subcategory })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<ProductlIstSkeleton />}>
        <ProductList category={subcategory} />
      </Suspense>
    </HydrationBoundary>
  );
}

export default Page;
