import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import { findByTestAttr } from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test(`에러 없는 랜더링`, () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("`success` prop이 false일때 Congrats 텍스트를 랜더링하지 않는다.", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("`success` prop이 true일때 Congrats 텍스트가 랜더링되어야한다.", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe("0");
});
