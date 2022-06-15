import createSagaMiddleware from 'redux-saga';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import usersReducer from '../features/users/usersSlice';
import RootSaga from '../features/root-saga';

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: [saga],
});
saga.run(RootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
