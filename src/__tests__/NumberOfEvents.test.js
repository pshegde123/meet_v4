import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents.jsx";
import { extractLocations, getEvents } from "../api.js";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  let setNumberOfEvents, setErrorAlert;
  beforeAll(() => {
    setNumberOfEvents = jest.fn();
    setErrorAlert = jest.fn();
  });

  test("renders number of events text input", () => {
    render(
      <NumberOfEvents
        numberOfEvents={32}
        setNumberOfEvents={setNumberOfEvents}
        setErrorAlert={setErrorAlert}
      />
    );
    const inputElement = screen.getByTestId("number-of-events-input");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("number-of-events-input");
  });

  test("renders input field with correct initial value", () => {
    render(
      <NumberOfEvents
        numberOfEvents={32}
        setNumberOfEvents={setNumberOfEvents}
        setErrorAlert={setErrorAlert}
      />
    );
    const inputElement = screen.getByTestId("number-of-events-input");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(32);
  });

  test("calls setNumberOfEvents and setErrorAlert with correct values when input is valid", () => {
    render(
      <NumberOfEvents
        numberOfEvents={32}
        setNumberOfEvents={setNumberOfEvents}
        setErrorAlert={setErrorAlert}
      />
    );
    const inputElement = screen.getByTestId("number-of-events-input");
    fireEvent.change(inputElement, { target: { value: "10" } });
    expect(setNumberOfEvents).toHaveBeenCalledWith(10);
    expect(setErrorAlert).toHaveBeenCalledWith("");
  });

  test("shows error message and calls setErrorAlert when input is invalid", () => {
    render(
      <NumberOfEvents
        numberOfEvents={32}
        setNumberOfEvents={setNumberOfEvents}
        setErrorAlert={setErrorAlert}
      />
    );
    const inputElement = screen.getByTestId("number-of-events-input");
    fireEvent.change(inputElement, { target: { value: "0" } });
    expect(screen.getByText("Select number from 1 to 32")).toBeInTheDocument();
    expect(setErrorAlert).toHaveBeenCalledWith("Select number from 1 to 32");
    //expect(setNumberOfEvents).not.toHaveBeenCalled();
  });
});
