import { Types } from "../actions/quote";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: {},
};

export const bookmarksReducer = (
  state = initialState,
  action: PayloadAction<string[]>
) => {
  switch (action.type) {
    case Types.GET_BOOKMARKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_BOOKMARKS_SUCCESS:
      return {
        ...(state.bookmarks = action.payload),
        loading: false,
      };
    default:
      return state;
  }
};
