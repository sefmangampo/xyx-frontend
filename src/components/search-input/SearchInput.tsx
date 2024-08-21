import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '@hooks/useAppContext';

import searchIcon from '@assets/icons/search.svg';

const validateISBN = (value: string) => {
    const cleaned = value.replace(/-/g, '');
    const isISBN10 = /^[\d]{9}[\dXx]$/.test(cleaned);
    const isISBN13 = /^[\d]{13}$/.test(cleaned);

    return isISBN10 || isISBN13;
};

const formatInput = (value: string) => {
    return value.replace(/[^0-9Xx-]/g, '');
};

const SearchInput: React.FC = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useAppContext();
    const { searchValue } = state;
    const [localValue, setLocalValue] = useState(searchValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setLocalValue(formatInput(value));
    };

    const handleSearch = useCallback(() => {
        const value = localValue.trim();
        if (validateISBN(value)) {
            dispatch({ type: 'setSearchValue', payload: value });
            dispatch({ type: 'setIsValid', payload: true });
            navigate(`/search?isbn=${encodeURIComponent(value)}`);
        } else {
            dispatch({ type: 'setIsValid', payload: false });
            dispatch({ type: 'setApiResult', payload: null });
            navigate('/search');
        }
    }, [localValue, navigate, dispatch]);

    return (
        <div className="flex items-center gap-2 p-2 m-2 border border-gray-300 rounded-full max-w-md bg-white">
            <input
                type="text"
                value={localValue}
                onChange={handleChange}
                placeholder="Search for a book"
                className="flex-1 border-none bg-transparent text-gray-700 text-sm placeholder-gray-500 focus:outline-none px-3"
            />
            <img src={searchIcon} alt="Search" className="cursor-pointer" onClick={handleSearch} />
        </div>
    );
};

export default SearchInput;
