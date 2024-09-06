import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchResult from '@components/search-result/SearchResult';
import SearchInput from '@components/search-input/SearchInput';
import useSearch from '@hooks/useSearch';

const SearchPage: React.FC = () => {
    const { apiResult, loading, error, warning, performSearch } = useSearch();
    const { search } = useLocation();

    const getQueryParam = (param: string) => {
        const urlParams = new URLSearchParams(search);
        return urlParams.get(param);
    };

    useEffect(() => {
        const isbnFromUrl = getQueryParam('isbn');
        if (isbnFromUrl) {
            performSearch(isbnFromUrl);
        }
    }, [search]);

    return (
        <div className="flex flex-col items-center justify-center gap-12 mx-4 my-20 max-w-screen-md ">
            <div className="text-3xl font-bold w-full text-center hidden lg:block">
                Search Result
            </div>
            <div className="w-full lg:hidden mb-4">
                <SearchInput />
            </div>
            {warning && <p className="text-red-500">{warning}</p>}
            <div className="w-full">
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                {apiResult ? (
                    <SearchResult />
                ) : (
                    !loading &&
                    !warning && (
                        <p className="text-gray-500">
                            No results found. Please enter a valid ISBN.
                        </p>
                    )
                )}
            </div>
        </div>
    );
};

export default SearchPage;
