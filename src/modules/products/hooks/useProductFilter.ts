import React from "react";
import { useQueryStates, parseAsString } from "nuqs";

export function useProductFilter() {
  return useQueryStates({
    minPrice: parseAsString.withOptions({
      clearOnDefault: true,
    }),
    maxPrice: parseAsString.withOptions({
      clearOnDefault: true,
    }),
  });
}

export default useProductFilter;
