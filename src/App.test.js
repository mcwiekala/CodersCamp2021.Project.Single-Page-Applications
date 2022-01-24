/* eslint-disable */

import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";
import React from "react";

configure({ adapter: new Adapter() });
it("renders without crashing", () => {
  const element = shallow(<App />);
  expect(element.text()).toEqual(
    "Edit src/App.js and save to reload.Learn React"
  );
});
