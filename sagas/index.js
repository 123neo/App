import { fork, all } from 'redux-saga/effects';
import { rootWatcherSaga } from './rootSaga';
// Here, we register our watcher saga(s) and export as a single generator
// function (startForeman) as our root Saga.
export default function* rootSaga() {
  yield all([rootWatcherSaga()]);
}
