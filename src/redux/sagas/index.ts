import { all } from "redux-saga/effects";
import bookmarksSaga from "./bookmarks";
import quoteSaga from "./quotes";

export default function* rootSaga() {
  yield all([...quoteSaga, ...bookmarksSaga]);
}
