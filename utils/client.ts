import { QueryClient } from "react-query";

export function getNewQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        cacheTime: Infinity,
        staleTime: Infinity,
      },
    },
  });
}
