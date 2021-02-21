import {
    LOAD_STATISTICS_DATA,
    SET_STATISTICS_DATA,
} from '../constants/dashboard.constants';

export const loadStatisticsDataAction = () => ({ type: LOAD_STATISTICS_DATA });
export const setStatisticsDataAction = (actionData) => ({ type: SET_STATISTICS_DATA, ...actionData });