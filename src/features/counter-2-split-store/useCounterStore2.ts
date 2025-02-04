// !
// Bad pattern, because: A split store makes selectors use state values from
// different times (vs one state snapshot in reducer pattern). This can create
// race conditions, inconsistency in single derived values and related values
// mistakenly being computed from different values. (e.g selectCount being
// rendered from a different computation of count.value than selectCountSquared
// but both rendering next to each other)

import { ref } from "vue";

const count = ref(0);

// Actions
const incrementClicked = () => {
  count.value++;
};
const decrementClicked = () => {
  count.value--;
};

const resetCounterStore2 = () => {
  count.value = 0;
};

// IMPURE Selectors
const selectCount = () => count.value;
const selectCountSquared = () => selectCount() * selectCount();



export default function useCounterStore() {
  return {
    count,
    incrementClicked,
    decrementClicked,
    selectCount,
    selectCountSquared,
    resetCounterStore2,
  };
}
