import { all, call, put, takeLatest } from "redux-saga/effects";

import getData from "../api";

function* fetchData() {
  yield takeLatest("FETCH_DATA", function*({ type }) {
    yield put({
      type: `${type}` + "START"
    });

    try {
      const data = yield call(getData);

      yield put({
        data,
        type: `${type}` + "SUCCESS"
      });
    } catch (err) {
      yield put({
        type: `${type}` + "FAIL"
      });
    }
  });
}

export default function*() {
  yield all([fetchData()]);
}
