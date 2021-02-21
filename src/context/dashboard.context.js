// src/count/count-context.js
import React, { createContext, useContext, useReducer } from 'react';

import {
    LOAD_HOME_DATA,
    LOAD_STATISTICS_DATA,
    SET_HOME_DATA,
    SET_STATISTICS_DATA
} from '../constants/dashboard.constants';

const DashboardContext = createContext();

const initialState = {
    homeData: {
        isLoading: false,
        error: null,
        data: {}
    },
    statisticsData: {
        isLoading: false,
        error: null,
        data: {}
    }
}


const dashboardReducer = (state, action) => {
    const { type, data, error } = action;
    switch (type) {
        case LOAD_HOME_DATA:
            return { ...state, homeData: { ...state.homeData, isLoading: true } };

        case SET_HOME_DATA:
            return { ...state, homeData: { ...state.homeData, isLoading: false, error, data } };

        case LOAD_STATISTICS_DATA:
            return { ...state, statisticsData: { ...state.statisticsData, isLoading: true } };

        case SET_STATISTICS_DATA:
            return { ...state, statisticsData: { ...state.statisticsData, isLoading: false, error, data } };
        default:
            return state;
    }
}

const useDashboardContext = () => {
    const context = useContext(DashboardContext);
    if (!context) {
        throw new Error(`useDashboardContext must be used within a DashboardContextProvider`);
    }
    return context;
}

const DashboardContextProvider = (props) => {
    const [dashboardState, dispatch] = useReducer(dashboardReducer, initialState)
    return <DashboardContext.Provider value={{ dashboardState, dispatch }} {...props} />
}

export { DashboardContextProvider, useDashboardContext };   