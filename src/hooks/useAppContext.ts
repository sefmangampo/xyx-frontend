import { AppAction, AppState } from '@interfaces/index';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useAppContext = (): { state: AppState; dispatch: React.Dispatch<AppAction> } => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
