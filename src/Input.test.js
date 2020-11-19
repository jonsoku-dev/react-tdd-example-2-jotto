import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  // shallow().dive() 얕은 랜더에서 한단계 아래로 가는법 dive().dive().dive()..... 이어줄 수 있다.
  return shallow(<Input store={store} />)
    .dive()
    .dive();
};

setup();

describe("render", () => {
  describe("word has not been guessed", () => {
    test("renders component without error", () => {
      //
    });
    test("renders input box", () => {
      //
    });
    test("renders submit box", () => {
      //
    });
  });
  describe("word has been guessed", () => {
    test("renders component without error", () => {
      //
    });
    test("does not render input box", () => {
      //
    });
    test("does not render submit box", () => {
      //
    });
  });
});
describe("update state", () => {});
