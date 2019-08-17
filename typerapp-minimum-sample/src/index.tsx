import { h, app, Action } from "typerapp";

type State = {
  value: number;
};

const Increment: Action<State> = state => ({
  ...state,
  value: state.value + 1
});

app<State>({
  init: { value: 1 },
  view: (state, dispatch) => (
    <div>
      {state.value}
      <button onClick={ev => dispatch(Increment)}>add</button>
    </div>
  ),
  node: document.body
});