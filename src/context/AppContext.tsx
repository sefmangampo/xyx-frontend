import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import reducer, { State, Action } from '../reducer/reducer';

const initialState: State = {
    searchValue: '',
    isValid: false,
    apiResult: null,
};

const AppContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(
    undefined,
);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export const useAppContext = (): { state: State; dispatch: React.Dispatch<Action> } => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
