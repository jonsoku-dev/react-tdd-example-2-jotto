import successReducer from "./successReducer";

test("returns default initial state of `false` when no action is passed", () => {
  const newState = successReducer(undefined, {}); // no state, no action
  expect(newState).toBe(false);
});
