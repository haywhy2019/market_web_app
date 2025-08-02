import React from "react";
import { createLoader, useQueryStates } from "nuqs";
import {parseAsString} from "nuqs/server"

export const params = {
  minPrice: parseAsString.withOptions({
    clearOnDefault: true,
  }),
  maxPrice: parseAsString.withOptions({
    clearOnDefault: true,
  }),
};
export function useProductFilter() {
  return useQueryStates(params)
}

export const loadProductFilter = createLoader(params)
export default useProductFilter;
