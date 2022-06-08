import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PokemonDataAccessProvider } from "./PokemonDataAccessProvider";
import { usePokemonQuery } from "./usePokemonQuery";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <PokemonDataAccessProvider value={{ useGet: usePokemonQuery }}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </PokemonDataAccessProvider>
  </React.StrictMode>
);
