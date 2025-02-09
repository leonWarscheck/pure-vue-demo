// # Redux Style, Immutable Statemanagement Implementation in Vue
// Demonstration Purposes Only 
// (For Production, the 'Vue Redux' Library is recommended instead, but its core
// pattern is the same as in this demo.)

import { ref, readonly } from "vue";

type State = {
  count: number;
};

type StateValues = State[keyof State];
type Payload = StateValues | undefined;

type ActionCreator = () => { type: string; payload?: Payload };
type Action = ReturnType<ActionCreator>;

// Default State
export const initialState: State = { count: 0 };

// Reducer with pure case handlers
export function counterReducer(
  state: State = initialState,
  { type, payload }: Action = { type: "" }
): State {
  switch (type) {
    case incrementClicked().type:
      return { ...state, count: state.count + 1 };
    case decrementClicked().type:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// The actual store object, stored in a single ref. By wrapping compute() around
// selectors in components, the store is reactive and the selectors are memoized.
const state = ref<State>(initialState);

// Dispatch function to trigger pure case handlers in the reducer via actions
// and replace state with a new immutable object on every change. Dispatch
// itself is not pure, but it's the most deterministic way to update state and
// the only impure point in the update cycle.
export const dispatch = (action: Action) => {
  state.value = counterReducer(state.value, action);
};

// Action Creators (pure), usually also with payload property, which was not
// needed here though.
export const incrementClicked: ActionCreator = () => ({
  type: "incrementClicked",
});
export const decrementClicked: ActionCreator = () => ({
  type: "decrementClicked",
});

// Pure Selectors, making business logic highly deterministic and composable
// (see: blog/symbol-trainer portfolio project, where I show JavaScripts
// functional composition capabilities with Ramda-Functions)
export const selectCount = (state: State) => state.count;
export const selectCountSquared = (state: State) =>
  selectCount(state) * selectCount(state);

// State, selectors, actions and dispatch returned: Ready to be used in
// components. State can be returned as _readonly_ to enforce immutable
// behaviour throughout the app. 
const useCounterStore = () => {
  return {
    state: readonly(state),
    incrementClicked,
    decrementClicked,
    selectCount,
    selectCountSquared,
    dispatch,
  };
};

export default useCounterStore;
