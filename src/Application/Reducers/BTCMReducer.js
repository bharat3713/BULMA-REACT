import { GET_BITCOIN_MONTH_HISTORY } from "../Actions/types";

const initialState = [{ coin: null }];

export default function(state = initialState, action) {
  if (action.type === GET_BITCOIN_MONTH_HISTORY) {
    return [...state, action.payload];
  }

  return state;
}
