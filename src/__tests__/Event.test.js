import React from "react";
import { render, screen } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe("<Event/> component", () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("render event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("render event summary", () => {
    expect(EventComponent.queryByText("React is Fun")).toBeInTheDocument();
  });

  test("render show details button", () => {
    const buttonElement = screen.getByText("Show Details");
    expect(buttonElement).toBeInTheDocument();
  });

  test("An event element is collapsed by default.", () => {
    expect(
      EventComponent.container.querySelector(".details")
    ).not.toBeInTheDocument();
  });

  test("render show details button", () => {
    const buttonElement = screen.getByText("Show Details");
    expect(buttonElement).toBeInTheDocument();
  });

  test("show event details button is present", async () => {
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
  });

  test('shows event details when "Show Details" button is clicked', async () => {
    const user = userEvent.setup();
    const buttonElement = EventComponent.getByText("Show Details");
    await user.click(buttonElement);

    const descriptionElement = EventComponent.queryByTestId("event-details");
    expect(descriptionElement).toBeInTheDocument();
    expect(buttonElement.textContent).toBe("Hide Details");
  });

  test("hides the details section when the user clicks on the 'Hide Details' button", async () => {
    const user = userEvent.setup();
    const buttonElement = EventComponent.getByText("Show Details");
    //Show Details
    await user.click(buttonElement);
    expect(buttonElement.textContent).toBe("Hide Details");
  });
});
