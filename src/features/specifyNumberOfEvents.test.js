import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user has not specified a number, 32 events are shown by default.", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user is on the events page", async () => {
      AppComponent = render(<App />);
    });

    and("the user hasn’t specified a number of events to display", () => {});

    when("the page loads", async () => {
      await waitFor(() => {
        expect(screen.getByRole("list")).toBeInTheDocument();
      });
    });

    then("32 events should be displayed by default", async () => {
      await waitFor(() => {
        const eventItems = screen.getAllByRole("listitem");
        expect(eventItems.length).toBe(parseInt(32));
      });
    });
  });

  test("User can change the number of events displayed.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user is on the events page", () => {
      AppComponent = render(<App />);
    });

    when("the user specifies a number of events to display", async () => {
      const numberOfEventsInput = screen.getByTestId("number-of-events-input");
      fireEvent.change(numberOfEventsInput, { target: { value: "10" } });
    });

    then("that number of events should be displayed", async () => {
      await waitFor(() => {
        const eventItems = screen.getAllByRole("listitem");
        expect(eventItems.length).toBe(parseInt("10"));
      });
    });
  });
});
