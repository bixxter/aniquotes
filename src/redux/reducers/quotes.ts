import { Types } from "../actions/quote";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  quote: {},
};

export const quotesReducer = (
  state = initialState,
  action: PayloadAction<string[]>
) => {
  switch (action.type) {
    case Types.GET_QUOTES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_QUOTES_SUCCESS:
      return {
        ...(state.quote = action.payload),
        loading: false,
      };
    default:
      return state;
  }
};
