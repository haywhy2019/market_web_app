import ProductList, {
  ProductlIstSkeleton,
} from "@/modules/products/ui/components/ProductList";
import { caller, getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";

interface Props {
  params: Promise<{
    category: string;
  }>;
}
async function Page({ params }: Props) {
  const { category } = await params;
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.products.getMany.queryOptions({ category })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<ProductlIstSkeleton />}>
        <ProductList category={category} />
      </Suspense>
    </HydrationBoundary>
  );
}

export default Page;
