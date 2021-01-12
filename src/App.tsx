/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { appStyles } from "./App.styles";
import { CatImageGenerator } from "./comonents/CatImageGenerator";

const queryClient = new QueryClient();

export const App = () => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <div css={appStyles}>
        <h1>CATS!!!!!</h1>
        <CatImageGenerator />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
