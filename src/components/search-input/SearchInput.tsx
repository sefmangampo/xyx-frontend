import React from 'react';
import { searchIcon } from '@assets/icons';
import { useHeroTranslations } from '@helpers/translations';
import useSearch from '@hooks/useSearch';

const SearchInput: React.FC = () => {
    const { navSearch } = useHeroTranslations();
    const { isbn, setIsbn, isValid, loading, error } = useSearch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setIsbn(value);
    };

    return (
        <div className="flex items-center gap-2 p-2 m-2 border border-gray-300 rounded-full max-w-md bg-white">
            <img src={searchIcon} alt="Search" className="h-6 w-6 object-contain" />
            <input
                type="text"
                value={isbn}
                onChange={handleChange}
                placeholder={navSearch}
                className="flex-1 border-none bg-transparent text-gray-700 text-sm placeholder-gray-500 focus:outline-none"
                maxLength={17}
            />
            {loading && <p className="text-gray-500 text-xs">Loading...</p>}
            {error && <p className="text-red-500 text-xs">Error: {error}</p>}
        </div>
    );
};

export default SearchInput;
