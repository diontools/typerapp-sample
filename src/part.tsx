import { h, View, actionCreator, ActionParamOf } from "typerapp";
import { httpText } from "typerapp/fx";
import { State } from "./states";

// Create action creator
const createAction = actionCreator<State>()("part");

// Action called from httpText effect
const TextReceived = createAction<ActionParamOf<typeof httpText>>(
  (state, params) => ({
    ...state,
    value: state.value + params.text.length
  })
);

// Action returns httpText effect
const RequestText = createAction<string>(state => [
  state,
  httpText(TextReceived, "/")
]);

// rendering function
export const view: View<State> = ({ part: state }, dispatch) => (
  <div>
    {state.value}
    <button onClick={ev => dispatch(RequestText, "/")}>request</button>
  </div>
);
