import useCounterStore2 from "./useCounterStore2";
import { test, describe, expect, beforeEach } from "vitest";

describe("useCounterStore2", () => {
  const {
    incrementClicked,
    decrementClicked,
    selectCount,
    selectCountSquared,
    resetCounterStore2,
  } = useCounterStore2();

  // ! Antipattern (shared states for tests), unavoidable with split store
  beforeEach(() => {
    resetCounterStore2();
  });

  describe("selectCount()", () => {
    test("given: no action dispatched, should: return initial state 0", () => {
      const actual = selectCount();
      const expected = 0;
      expect(actual).toEqual(expected);
    });

    test("given: incrementClicked, should: return 1", () => {
      incrementClicked();
      const actual = selectCount();
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    test("given: incrementClicked, then decrementClicked, should: return 0", () => {
      incrementClicked();
      decrementClicked();
      const actual = selectCount();
      const expected = 0;
      expect(actual).toEqual(expected);
    });
  });

  describe("selectCountSquared()", () => {
    test("given: no action dispatched, should: return initial state squared (0)", () => {
      const actual = selectCountSquared();
      const expected = 0;
      expect(actual).toEqual(expected);
    });

    test("given: 2 incrementClicked, should: return 2 squared", () => {
      incrementClicked();
      incrementClicked();
      const actual = selectCountSquared();
      const expected = 4;
      expect(actual).toEqual(expected);
    });

    test("given: 3 increments and 1 decrements, should: return 2 squared", () => {
      incrementClicked();
      incrementClicked();
      incrementClicked();
      decrementClicked();
      const actual = selectCountSquared();
      const expected = 4;
      expect(actual).toEqual(expected);
    });
  });
});
