import React from "react";
import { mount } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import Congrats from "./Congrats";
import LanguageContext from "./contexts/languageContext";

const defaultProps = { success: false };

const setup = ({ success, language }) => {
  language = language || "en";
  success = success || false;

  return mount(
    <LanguageContext.Provider value={language}>
      <Congrats success={success} />
    </LanguageContext.Provider>
  );
};

describe('language picker', () => {
  test('correctly renders congrats string in English by default', () => {
    const wrapper = setup({ success: true });
    expect(wrapper.text()).toBe('Congratulations! You guessed the word!');
  });
  test('correctly renders congrats string in emoji', () => {
    const wrapper = setup({ success: true, language: "emoji" });
    expect(wrapper.text()).toBe('🎯🎉');
  });
});

test(`에러 없는 랜더링`, () => {
  const wrapper = setup({ success: false });
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

test("예상되는 Prop으로는 경고를 던지지 않는다.", () => {
  const expectedProps = { success: true };
  checkProps(Congrats, expectedProps);
});
