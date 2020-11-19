import { correctGuess } from "./index";

describe("correctGuess", () => {
  test("returns an action with type `CORRECT_GUESS", () => {
    const action = correctGuess();
    // toBe : 숫자와 문자열 같은 불변 객체에만 사용할 수 있다.
    // toEqual : 객체나 배열의 최상위 속성을 비교할 뿐만 아니라 재귀적으로 비교한다.
    expect(action).toEqual({});
  });
});
