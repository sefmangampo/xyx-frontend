import React from 'react';
import './SearchInput.css';
import { searchIcon } from '@assets/icons';
import { useHeroTranslations } from '@helpers/translations';
import useSearch from '@hooks/useSearch';

const SearchInput: React.FC = () => {
    const { navSearch } = useHeroTranslations();
    const { isbn, setIsbn, isValid, loading, error } = useSearch(); // Removed result from here

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setIsbn(value);
    };

    return (
        <div className="isbn-container">
            <img src={searchIcon} alt="" />
            <input
                type="text"
                value={isbn}
                onChange={handleChange}
                placeholder={navSearch}
                className="isbn-input"
                maxLength={17}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default SearchInput;
