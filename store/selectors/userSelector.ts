import { createSelector } from 'reselect';

const userDataSelector = (state: any) => state.user;

export const userInfoSelector = createSelector(
    userDataSelector,
    payload => payload.login?.user
);

export const loginStatusSelector = createSelector(
    userDataSelector,
    payload => payload.status
);
