/* eslint-disable */

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import React from "react";

configure({ adapter: new Adapter() });
it("renders without crashing", () => {
  const element = shallow(<App />);
  expect(element.text()).toEqual(
    "Edit src/App.js and save to reload.Learn React"
  );
});
