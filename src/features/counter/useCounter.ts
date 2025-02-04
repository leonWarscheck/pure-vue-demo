import { ref, readonly } from "vue";
import type { CounterState } from "./counter.types";
import { INITIAL_COUNT } from "./counter.constants";

export function useCounter(initialValue: number = INITIAL_COUNT) {
  const count = ref<CounterState["count"]>(initialValue);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return {
    count: readonly(count), 
    increment,
    decrement,
  };
}
