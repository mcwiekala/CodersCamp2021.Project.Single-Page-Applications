/* eslint-disable */

import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import React from "react";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  console.log("test");
  const element = shallow(<Navbar />);

  console.log(element.text());

  expect(
    element
      .text()
      .startsWith("MCkino HomeMoviesComing soonYour bookingsRegisterLog in")
  ).toBe(true);
});
