import { ReactNode } from "react";
import { queryClient } from "@services/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
import { UseShoppingCartProvider } from "./useShoppingCart";
import { theme } from "@styles/themeChakra";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <UseShoppingCartProvider>{children}</UseShoppingCartProvider>
      </ChakraProvider>
      <ReactQueryDevtools position="left" buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}