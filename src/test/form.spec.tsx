import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";

import { Form } from "../components/form";
import { LocationsContext } from "../contexts/LocationsContext";
import { Locations } from "../components/list/locations";
import { ILocation } from "../types/location";

const queryClient = new QueryClient();

const mockContextValue: {
  locationState: ILocation[];
  filteredLocations: ILocation[];
  onSubmit: (data: { period: string; showClosed: boolean }) => void;
  onReset: () => void;
} = {
  locationState: [],
  filteredLocations: [],
  onSubmit: vitest.fn((data) => {
    if (data.period === "morning") {
      mockContextValue.filteredLocations = Array(62).fill({} as ILocation);
    }
  }),
  onReset: vitest.fn(() => {
    mockContextValue.filteredLocations = [];
  }),
};

describe("Form component testing", () => {
  it("should filter morning period units", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <LocationsContext.Provider value={mockContextValue}>
          <Form />
          <Locations />
        </LocationsContext.Provider>
      </QueryClientProvider>
    );

    act(() => [
      fireEvent.click(screen.getByLabelText(/Manhã/i)),
      fireEvent.click(screen.getByRole("checkbox")),
      fireEvent.click(screen.getByText(/ENCONTRAR UNIDADE/i)),
    ]);

    const spanElement = await screen.findByRole("spanValue");
    expect(spanElement).toHaveTextContent("62");
  });
});
