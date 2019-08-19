import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Controls from "./Controls";

describe("<Controls />", () => {
  it("Check if display is set to Unlocked/Open", () => {
    const closeSpy = jest.fn();
    const { queryByText } = render(
      <Controls locked={false} closed={false} toggleClosed={closeSpy} />
    );

    // Target Lock Button
    const lockButton = queryByText("Lock Gate");
    expect(lockButton);

    // Check to see if lock button is disabled by default
    expect(lockButton.disabled).toBe(true);

    // Target Close Button
    const closeButton = queryByText("Close Gate");
    expect(closeButton);

    // Check to see if Close button can be clicked by default
    expect(closeButton.disabled).toBe(false);
    fireEvent.click(closeButton);

    // Check if mock functions were called
    expect(closeSpy).toBeCalled();
  });
  it("Check if display is set to Unlocked/Closed", () => {
    const openSpy = jest.fn(),
      lockSpy = jest.fn();
    const { queryByText } = render(
      <Controls
        locked={false}
        closed={true}
        toggleClosed={openSpy}
        toggleLocked={lockSpy}
      />
    );

    // Target Lock Button
    const lockButton = queryByText("Lock Gate");
    expect(lockButton);

    // Check to see if lock button is disabled by default
    expect(lockButton.disabled).toBe(false);

    // Target Open Button
    const openButton = queryByText("Open Gate");
    expect(openButton);

    // Check to see if Open button can be clicked by default
    expect(openButton.disabled).toBe(false);
    fireEvent.click(openButton);

    // Check if mock functions were called
    expect(openSpy).toBeCalled();
    fireEvent.click(lockButton);
    expect(lockSpy).toBeCalled();
  });
  it("Check if display is set to Locked/Closed", () => {
    const unlockSpy = jest.fn();
    const { queryByText } = render(
      <Controls locked={true} closed={true} toggleLocked={unlockSpy} />
    );

    // Target Unlock Button
    const unlockButton = queryByText("Unlock Gate");
    expect(unlockButton);

    // Check to see if unlock button is disabled by default
    expect(unlockButton.disabled).toBe(false);

    // Target Open Button
    const openButton = queryByText("Open Gate");
    expect(openButton);

    // Check to see if Open button can be clicked by default
    expect(openButton.disabled).toBe(true);
    fireEvent.click(unlockButton);

    // Check if mock functions were called
    expect(unlockSpy).toBeCalled();
  });
});
