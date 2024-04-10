import type { AppProps } from "next/app";
import { Providers } from "@contexts/Provider";
import "normalize.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
