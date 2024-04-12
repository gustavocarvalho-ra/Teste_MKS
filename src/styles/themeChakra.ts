import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
  styles: {
    global: {
      "&::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#7A7A7A",
        borderRadius: "16px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#ECECEC",
        borderRadius: "16px",
      },
    },
  },
});