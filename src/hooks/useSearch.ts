import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const baseUrl = 'http://localhost:3000/api';

const useSearch = () => {
    const { state, dispatch } = useAppContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<any>(null); // Define type based on your API response
    const [debouncedValue, setDebouncedValue] = useState(state.searchValue);

    const navigate = useNavigate(); // Initialize useNavigate

    // Debounce effect
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(state.searchValue);
        }, 500); // 500ms delay

        return () => {
            clearTimeout(handler); // Clear timeout if value changes (clean up)
        };
    }, [state.searchValue]);

    useEffect(() => {
        const validateISBN = (value: string) => {
            const cleaned = value.replace(/\D/g, '');
            return (
                (cleaned.startsWith('978') && cleaned.length === 13) || // ISBN-13
                cleaned.length === 10 // ISBN-10
            );
        };

        const isValid = validateISBN(debouncedValue);
        dispatch({ type: 'setIsValid', payload: isValid });

        if (isValid) {
            navigate(`/search?isbn=${encodeURIComponent(debouncedValue)}`); // Navigate to the search route
            search(debouncedValue); // Trigger search after debounce
        }
    }, [debouncedValue, dispatch, navigate]);

    const search = async (isbn: string) => {
        console.log('Searching for ISBN:', isbn);

        setLoading(true);
        setError(null);

        try {
            // const response = await fetch(`${baseUrl}/books?isbn=${encodeURIComponent(isbn)}`);
            const response = await fetch(`${baseUrl}/books/1`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('DAta', data);
            setResult(data); // Store the result in local state
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
            console.error('Error fetching API:', err);
        } finally {
            setLoading(false);
        }
    };

    return {
        isbn: state.searchValue, // Provide state value
        setIsbn: (value: string) => dispatch({ type: 'setSearchValue', payload: value }), // Provide dispatch function
        isValid: state.isValid,
        loading,
        error,
        result,
    };
};

export default useSearch;
