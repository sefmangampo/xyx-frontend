import { useCallback } from 'react';
import api from '../api/axios';
import useValidateISBN from './useValidateISBN';
import { useAppContext } from './useAppContext';

const useSearch = () => {
    const { state, dispatch } = useAppContext();
    const { validate } = useValidateISBN();

    const performSearch = useCallback(
        async (isbn: string) => {
            dispatch({ type: 'setSearchValue', payload: isbn });
            dispatch({ type: 'setLoading', payload: true });
            dispatch({ type: 'setError', payload: null });
            dispatch({ type: 'setWarning', payload: null });
            dispatch({ type: 'setApiResult', payload: null });

            try {
                if (validate(isbn)) {
                    const response = await api.get(`/api/books/search`, {
                        params: { isbn },
                    });

                    dispatch({ type: 'setApiResult', payload: response.data });
                } else {
                    dispatch({ type: 'setWarning', payload: 'Invalid ISBN format.' });
                }
            } catch (err) {
                dispatch({ type: 'setError', payload: 'Failed to fetch data. Please try again.' });
            } finally {
                dispatch({ type: 'setLoading', payload: false });
            }
        },
        [validate, dispatch],
    );

    return {
        searchValue: state.searchValue,
        isValid: state.isValid,
        apiResult: state.apiResult,
        loading: state.loading,
        error: state.error,
        warning: state.warning,
        performSearch,
    };
};

export default useSearch;
