import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "../config/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {import.meta.env.MODE === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}
