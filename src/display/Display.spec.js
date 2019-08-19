import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Display from "./Display";

describe("<Display />", () => {
  it("Default state set to open and unlocked", () => {
    const { getByText } = render(<Display />);
    // Check if unlocked and open are displayed on screen
    expect(getByText("Unlocked"));
    expect(getByText("Open"));
  });
  it("Accepting props", () => {
    // Check if display component receives props and changes based off received props
    const { getByText } = render(<Display locked={true} closed={true} />);
    expect(getByText("Locked"));
    expect(getByText("Closed"));
  });
});
