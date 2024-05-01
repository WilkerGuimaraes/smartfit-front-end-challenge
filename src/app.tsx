import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Form } from "./components/form";
import { Header } from "./components/header";
import { Legend } from "./components/legend";
import { Locations } from "./components/list/locations";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Form />
      <Legend />
      <Locations />
    </QueryClientProvider>
  );
}
