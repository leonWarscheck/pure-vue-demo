import useCounterStore, { decrementClicked, incrementClicked,  counterReducer, selectCount, selectCountSquared } from "./useCounterStore";
import { test, describe, expect } from "vitest";

describe("useCounterStore", () => {

  describe("selectCount()", () => {
    test("given: no action dispatched, should: return initial state 0", () => {
      const state = counterReducer();

      const actual = selectCount(state);
      const expected = 0;
      expect(actual).toEqual(expected);
    });             

    test("given: incrementClicked, should: return 1", () => {
      const state = counterReducer(undefined, incrementClicked());
      const actual = selectCount(state);
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    test("given: incrementClicked, then decrementClicked, should: return 0", () => {
      const actions = [incrementClicked(), decrementClicked()];
      const state = actions.reduce(counterReducer, counterReducer());

      const actual = selectCount(state);
      const expected = 0;
      expect(actual).toEqual(expected);
    });
  });

  describe("selectCountSquared()", () => {
    test("given: no action dispatched, should: return initial state squared (0)", () => {
      const state = counterReducer();
      const actual = selectCountSquared(state);
      const expected = 0;
      expect(actual).toEqual(expected);
    });

    test("given: 2 incrementClicked, should: return 2 squared", () => {
      const actions = [incrementClicked(), incrementClicked()];
      const state = actions.reduce(counterReducer, counterReducer());
      const actual = selectCountSquared(state);
      const expected = 4;
      expect(actual).toEqual(expected);
    });

    test("given: 3 increments and 1 decrements, should: return 2 squared", () => {
      const actions = [incrementClicked(), incrementClicked(), incrementClicked(), decrementClicked()];
      const state = actions.reduce(counterReducer, counterReducer());
      const actual = selectCountSquared(state);
      const expected = 4;
      expect(actual).toEqual(expected);
    });
  });
});
