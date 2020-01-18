import React from "react";
import { render, fireEvent } from "react-testing-library";
import Dashboard from "./Dashboard";
// Cleans up unnecessary files
import "react-testing-library/cleanup-after-each";

describe("<Dashboard />", () => {
  it("Default state set to unlocked and open", () => {
    const { getByText } = render(<Dashboard />);
  });
  describe("Checks all text being rendered based on button clicks", () => {
    const { queryByText, getByText } = render(<Dashboard />);
    // Target Close Button
    const closeButton = queryByText("Close Gate");
    expect(closeButton);

    // Click close button
    fireEvent.click(closeButton);

    // Checks new state after close button is clicked
    expect(getByText("Lock Gate"));
    expect(getByText("Open Gate"));
    expect(getByText("Unlocked"));
    expect(getByText("Closed"));

    // Target Lock Button
    const lockButton = queryByText("Lock Gate");
    expect(lockButton);

    // Click lock button
    fireEvent.click(lockButton);

    // Checks new state after lock button button is clicked
    expect(getByText("Unlock Gate"));
    expect(getByText("Open Gate"));
    expect(getByText("Locked"));
    expect(getByText("Closed"));

    // Target Unlock Button
    const unlockButton = queryByText("Unlock Gate");
    expect(unlockButton);

    // Click unlock button
    fireEvent.click(unlockButton);

    // Checks new state after unlock button button is clicked
    expect(getByText("Lock Gate"));
    expect(getByText("Open Gate"));
    expect(getByText("Unlocked"));
    expect(getByText("Closed"));

    // Target Open Button
    const openButton = queryByText("Open Gate");
    expect(openButton);

    // Click open button
    fireEvent.click(openButton);

    // Checks new state after open button button is clicked
    expect(getByText("Lock Gate"));
    expect(getByText("Close Gate"));
    expect(getByText("Unlocked"));
    expect(getByText("Open"));
  });
});
