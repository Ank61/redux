import { put, takeEvery, all } from 'redux-saga/effects';
import { increment } from '../Slice/slice';

function* incrementAsync() {
  // Perform asynchronous operations here, e.g., API call
  yield new Promise(resolve => setTimeout(resolve, 1000));

  // Dispatch the success action
  yield put(increment());
}

function* watchIncrementAsync() {
  yield takeEvery('counter/incrementAsync', incrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}