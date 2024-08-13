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
    if (data.period === "morning" && data.showClosed) {
      mockContextValue.filteredLocations = Array(117).fill({} as ILocation);
    } else if (data.period === "morning") {
      mockContextValue.filteredLocations = Array(62).fill({} as ILocation);
    } else if (data.period === "afternoon" && data.showClosed) {
      mockContextValue.filteredLocations = Array(134).fill({} as ILocation);
    } else if (data.period === "afternoon") {
      mockContextValue.filteredLocations = Array(79).fill({} as ILocation);
    } else if (data.period === "night" && data.showClosed) {
      mockContextValue.filteredLocations = Array(148).fill({} as ILocation);
    } else if (data.period === "night") {
      mockContextValue.filteredLocations = Array(93).fill({} as ILocation);
    } else {
      mockContextValue.filteredLocations = Array(0).fill({} as ILocation);
    }
  }),
  onReset: vitest.fn(() => {
    mockContextValue.filteredLocations = [];
  }),
};

describe("Form component testing", () => {
  it("should filter morning period", async () => {
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

  it("should filter morning period with closed units", async () => {
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
      fireEvent.click(screen.getByText(/ENCONTRAR UNIDADE/i)),
    ]);

    const spanElement = await screen.findByRole("spanValue");
    expect(spanElement).toHaveTextContent("117");
  });

  it("should filter afternoon period", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <LocationsContext.Provider value={mockContextValue}>
          <Form />
          <Locations />
        </LocationsContext.Provider>
      </QueryClientProvider>
    );

    const afternoonPeriod = screen.getByLabelText(/Tarde/i);

    act(() => [
      fireEvent.click(afternoonPeriod),
      fireEvent.click(screen.getByRole("checkbox")),
      fireEvent.click(screen.getByText(/ENCONTRAR UNIDADE/i)),
    ]);

    const spanElement = await screen.findByRole("spanValue");
    expect(spanElement).toHaveTextContent("79");
  });

  it("should filter afternoon period with closed units", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <LocationsContext.Provider value={mockContextValue}>
          <Form />
          <Locations />
        </LocationsContext.Provider>
      </QueryClientProvider>
    );

    const afternoonPeriod = screen.getByLabelText(/Tarde/i);

    act(() => [
      fireEvent.click(afternoonPeriod),
      fireEvent.click(screen.getByText(/ENCONTRAR UNIDADE/i)),
    ]);

    const spanElement = await screen.findByRole("spanValue");
    expect(spanElement).toHaveTextContent("134");
  });

  it("should filter night period", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <LocationsContext.Provider value={mockContextValue}>
          <Form />
          <Locations />
        </LocationsContext.Provider>
      </QueryClientProvider>
    );

    const nightPeriod = screen.getByLabelText(/Noite/i);

    act(() => [
      fireEvent.click(nightPeriod),
      fireEvent.click(screen.getByText(/ENCONTRAR UNIDADE/i)),
    ]);

    const spanElement = await screen.findByRole("spanValue");
    expect(spanElement).toHaveTextContent("148");
  });

  it("should filter night period with units closed", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <LocationsContext.Provider value={mockContextValue}>
          <Form />
          <Locations />
        </LocationsContext.Provider>
      </QueryClientProvider>
    );

    const nightPeriod = screen.getByLabelText(/Noite/i);

    act(() => [
      fireEvent.click(nightPeriod),
      fireEvent.click(screen.getByRole("checkbox")),
      fireEvent.click(screen.getByText(/ENCONTRAR UNIDADE/i)),
    ]);

    const spanElement = await screen.findByRole("spanValue");
    expect(spanElement).toHaveTextContent("93");
  });
});
