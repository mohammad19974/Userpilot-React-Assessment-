import { createSlice } from '@reduxjs/toolkit';
interface InitialState {
    users: Users;
    isLoading: boolean;
    isError: boolean;
}
type TypePicture = {
    thumbnail: string;
    medium: string;
    large: string;
};
type TypeName = {
    first: string;
    last: string;
    title: string;
};
type TypeLocation = {
    city: string;
    country: string;
    postcode: number;

    state: string;
    street: { name: string; number: number };
};
type TypeDob = { age: number; date: Date };
type TypeLogin = {
    uuid: string;
};
type TypeRegistered = {
    age: number;
    date: Date | string;
};
interface UserResults {
    dob: TypeDob;
    cell: string;
    email: string;
    gender: 'male' | 'female';
    location: TypeLocation;
    name: TypeName;
    nat: string;
    phone: string;
    login: TypeLogin;
    picture: TypePicture;
    registered: TypeRegistered;
}
interface Users {
    results: Array<UserResults>;
}
const initialState: InitialState = {
    users: { results: [] },
    isLoading: false,
    isError: false,
};
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUserFetch: (
            state,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            action: {
                payload: string;
                type: string;
            },
        ) => {
            state.isLoading = true;
        },
        getUserSuccess: (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
            state.isError = false;
        },
        getUserFailure: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
    },
});
export const { getUserFailure, getUserSuccess, getUserFetch } =
    usersSlice.actions;
export default usersSlice.reducer;
