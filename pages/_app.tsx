import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { AppProps } from "next/app";
import React, { useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import store from "../store";
import "../styles.css";

import { theme } from "src/components/foundation";
import "src/components/foundation/globals.css";
import { getNewQueryClient } from "src/utils";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = getNewQueryClient();
  }

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
