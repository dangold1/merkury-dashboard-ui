import {
    LOAD_HOME_DATA,
    SET_HOME_DATA,
} from '../constants/dashboard.constants';

export const loadHomeDataAction = () => ({ type: LOAD_HOME_DATA });
export const setHomeDataAction = (actionData) => ({ type: SET_HOME_DATA, ...actionData });