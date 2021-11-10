import { takeEvery, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions/quote";
import { getRandomQuote } from "../../services/quote.service";
import { SagaReturnType } from "@redux-saga/core/effects";

function* getQuotes(): any {
  try {
    const result: SagaReturnType<typeof getRandomQuote> = yield call(
      getRandomQuote
    );
    yield put(actions.getQuotesSuccess(result));
  } catch (error) {
    console.error(error);
  }
}

function* watchQuotesRequest() {
  yield takeEvery(actions.Types.GET_QUOTES_REQUEST, getQuotes);
}

const quoteSaga = [fork(watchQuotesRequest)];

export default quoteSaga;
