import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../test/testUtils";
import Input from "./Input";

const setup = ({ secretWord = "party" }) => {
  return shallow(<Input secretWord={secretWord} />);
};

test("인풋 컴포넌트가 제대로 랜더링이 되는가?", () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});
test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});

describe("state controlled input filed", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  beforeEach(() => {
    // https://jestjs.io/docs/en/mock-function-api#mockfnmockclear
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup({});
  });
  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    // onChange함수가 실행!
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    // setState를 한 후 결과값이 어떻게 되는지 !
    // 모의 함수가 특정 인수로 호출되었는지 확인하는 데 사용 합니다.
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("입력 후 state 초기화", () => {
    const inputBox = findByTestAttr(wrapper, "submit-button");
    inputBox.simulate("click", {
      preventDefault() {},
    });

    // 모의 함수가 특정 인수로 호출되었는지 확인하는 데 사용 합니다.
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
