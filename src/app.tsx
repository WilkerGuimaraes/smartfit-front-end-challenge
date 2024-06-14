import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Form } from "./components/form";
import { Header } from "./components/header";
import { Legend } from "./components/legend";
import { Locations } from "./components/list/locations";

import { LocationProvider } from "./contexts/LocationsContext";
import { Description } from "./components/description";
import { Footer } from "./components/footer";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <LocationProvider>
        <div className="flex flex-col mx-auto max-w-[1280px]">
          <Description />
          <Form />
          <Legend />
          <Locations />
        </div>
      </LocationProvider>
      <Footer />
    </QueryClientProvider>
  );
}
