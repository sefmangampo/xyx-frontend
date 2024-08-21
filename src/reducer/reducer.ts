import { AppAction, AppState } from '@interfaces/index';

const validateISBN = (value: string): boolean => {
    const cleaned = value.replace(/\D/g, '');
    return (
        (cleaned.startsWith('978') && cleaned.length === 13) || // ISBN-13
        cleaned.length === 10 // ISBN-10
    );
};

const reducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case 'setSearchValue': {
            const newSearchValue = action.payload;
            const isValid = validateISBN(newSearchValue);
            return {
                ...state,
                searchValue: newSearchValue,
                isValid,
                warning: isValid ? null : 'Invalid ISBN format.',
            };
        }
        case 'setIsValid':
            return { ...state, isValid: action.payload };
        case 'setApiResult':
            return {
                ...state,
                apiResult: action.payload,
                warning: null,
            };
        case 'setLoading':
            return { ...state, loading: action.payload };
        case 'setError':
            return { ...state, error: action.payload };
        case 'setWarning':
            return { ...state, warning: action.payload };
        default:
            return state;
    }
};

export default reducer;
