import { combineReducers } from "redux";
import { quotesReducer } from "./quotes";
import { bookmarksReducer } from "./bookmarks";

export default combineReducers({
  store: quotesReducer,
  bookmarks: bookmarksReducer,
});
