import React, { createContext, useReducer, ReactNode } from 'react';
import reducer from '../reducer/reducer';
import { AppState, AppAction } from '@interfaces/index';

const initialState: AppState = {
    searchValue: '',
    isValid: false,
    apiResult: null,
    loading: false,
    error: null,
    warning: null,
};

export const AppContext = createContext<
    { state: AppState; dispatch: React.Dispatch<AppAction> } | undefined
>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
