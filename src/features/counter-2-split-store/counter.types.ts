export interface CounterState {
    count: number
  }
  
  export interface CounterControls {
    onIncrement: () => void
    onDecrement: () => void
  }