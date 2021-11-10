import { takeEvery, put, fork } from "redux-saga/effects";
import * as actions from "../actions/quote";
import { SagaReturnType } from "@redux-saga/core/effects";
import { getBookmarksHandler } from "../../services/bookmark.service";
function* getBookmarks(): any {
  try {
    const result: SagaReturnType<typeof getBookmarksHandler> =
      yield getBookmarksHandler();
    yield put(actions.getBookmarksSuccess(result));
  } catch (error) {
    console.error(error);
  }
}

function* watchBookmarksRequest() {
  yield takeEvery(actions.Types.GET_BOOKMARKS_REQUEST, getBookmarks);
}

const bookmarksSaga = [fork(watchBookmarksRequest)];

export default bookmarksSaga;
