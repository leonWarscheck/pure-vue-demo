import { ref, readonly } from "vue";

// Types
type State = {
  count: number;
};

type Action = { type: "incrementClicked" } | { type: "decrementClicked" };

// Default State
const initialState: State = { count: 0 };

// Reducer with pure case handlers
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "incrementClicked":
      return { ...state, count: state.count + 1 };
    case "decrementClicked":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// The actual store object
const state = ref<State>(initialState);

// Dispatch function to trigger pure case handlers in the reducer via actions
// and replace state with a new immutable object on every change. Dispatch
// itself is not pure, but it's the most deterministic way to update state and
// the only impure point in the update cycle.
const dispatch = (action: Action) => {
  state.value = reducer(state.value, action);
};

// Action-dispatch-functions Pure Actions wrapped in impure dispatch. In
// contrast to React, in Vue we can wrap the actions in dispatch already so the
// components can simply invoke the action-dispatch functions in their handlers.
const incrementClicked = () => dispatch({type: 'incrementClicked'})
const decrementClicked = () => dispatch({type: 'decrementClicked'})

// Pure Selectors
const selectCount = (state: State) => state.count

// Ready to use in components
export default function useCounterStore() {
  return {
    state: readonly(state.value),
    incrementClicked,
    decrementClicked,
    selectCount,
  };
}
