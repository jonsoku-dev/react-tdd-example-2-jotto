import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("dose not throw warning with expected props.", () => {
  checkProps(GuessedWords, defaultProps);
});

// 테스트를 그룹화하는 방법 : describe
describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-word");
    expect(component.length).toBe(1);
  });
  /**
   * .not(selector) => ShallowWrapper
   *  https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/not.html
   *  제공된 선택기와 일치하지 않는 현재 래퍼의 노드 만있는 새 래퍼를 반환합니다.
   *  이 방법은 사실상의 부정 또는 역입니다 filter.
   */
  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "component-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});
describe("if there are words guessed", () => {});
