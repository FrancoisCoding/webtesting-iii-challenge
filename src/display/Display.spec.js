import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Display from "./Display";

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  // it("displays a message when 'speak' button is clicked", () => {
  //   const speak = jest.fn();
  //   let messageMock = "";

  //   const { getByText } = render(<Display speak={speak} message={messageMock} />);

  //   fireEvent.click(getByText(/speak/i));

  //   expect(speak).toHaveBeenCalled();
  // });
});
