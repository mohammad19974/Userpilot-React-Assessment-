import { all, fork } from 'redux-saga/effects';
import usersSaga from '../users/saga';

export default function* RootSaga() {
    yield all([fork(usersSaga)]);
}
