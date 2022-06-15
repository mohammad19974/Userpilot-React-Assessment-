import { put, takeEvery, call } from 'redux-saga/effects';
import { getUserSuccess } from '../usersSlice';
const asyncFetch = async (params: string) => {
    return await fetch(`https://randomuser.me/api/${params}`);
};
function* apiUsersFetch(params: string): unknown {
    const userList = yield call(() => asyncFetch(params));
    const formattedUser = yield userList.json();

    yield put(getUserSuccess(formattedUser));
}

function* usersSaga() {
    yield takeEvery('users/getUserFetch', (event?: { payload: string }) =>
        apiUsersFetch(event?.payload ?? ''),
    );
}

export default usersSaga;
