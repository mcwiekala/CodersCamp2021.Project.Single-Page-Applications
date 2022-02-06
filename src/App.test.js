/* eslint-disable */

import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { getByText, render } from "@testing-library/react";
import Navbar from "./components/navbar/Navbar";
import React from "react";

describe("Navbar render", () => {
  it("rendered element", () => {
    const { getByTestId } = render(<Navbar />);
    const element = getByTestId("navbar");
    expect(element).toBeTruthy();
  });
});
