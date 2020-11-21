import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";

import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();

// useEffect는 mount에서만 쓸 수 있다.
const setup = (secretWord = "party") => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  // loading spinner
  const mockUseReducer = jest
    .fn()
    .mockReturnValue([{ secretWord, language: "en" }, jest.fn()]);
  React.useReducer = mockUseReducer;

  // use mount, because useEffect not called on `shallow`
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(<App />);
};

test(`App renders without error`, () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});

describe("getSecretWord calls", () => {
  test("getSecretWord gets called on App mount", () => {
    setup();

    // check to see if seecret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
  test("secretWord does not update on App update", () => {
    const wrapper = setup();
    // beforeEach 에서 한번 추가되었기 때문에 이것을 초기화시킨다.
    mockGetSecretWord.mockClear();

    // wrapper.update() dosen't trigger update
    // (issued forked from https://github.com/airbnb/enzyme/issues/2091)
    wrapper.setProps();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe("secretWord is not null", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup("party");
  });
  test("renders app when secretWord is not null", () => {
    const appComponent = findByTestAttr(wrapper, "component-app");
    // 위에서 찾은 컴포넌트가 존재하는지 확인하는법. (더이상 expect(component.length).toBe(1) 을 안써도되나?
    expect(appComponent.exists()).toBe(true);
  });
  test("does not render spinner when secretWord is not null", () => {
    const spinnerComponent = findByTestAttr(wrapper, "spinner");
    expect(spinnerComponent.exists()).toBe(false);
  });
});

describe("secretWord is null", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(null);
  });
  test("renders app when secretWord is null", () => {
    const appComponent = findByTestAttr(wrapper, "component-app");
    // 위에서 찾은 컴포넌트가 존재하는지 확인하는법. (더이상 expect(component.length).toBe(1) 을 안써도되나?
    expect(appComponent.exists()).toBe(false);
  });
  test("render spinner when secretWord is null", () => {
    const spinnerComponent = findByTestAttr(wrapper, "spinner");
    expect(spinnerComponent.exists()).toBe(true);
  });
});
