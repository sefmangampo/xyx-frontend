import React from 'react';
import SearchResult from '@components/search-result/SearchResult';
import SearchInput from '@components/search-input/SearchInput'; // Import your SearchInput component

function SearchPage() {
    const data = {
        image: '',
        id: 1,
        title: 'American Elf',
        isbn_13: '9781891830853',
        isbn_10: '1891830856',
        price: '1000.0',
        edition: 'sdfds',
        year: 2004,
        publisher: {
            id: 1,
            name: 'Paste Magazine',
        },
        authors: 'Joel Hatse, Hannah P. Templer, Marguerite Z. Duras',
    };

    return (
        <div className="flex flex-col items-center justify-center gap-12 mx-4 my-20 max-w-screen-md mx-auto">
            <div className="text-3xl font-bold w-full text-center hidden lg:block">
                Search Result
            </div>
            <div className="w-full lg:hidden mb-4">
                <SearchInput /> {/* Add search input for mobile view */}
            </div>
            <div className="w-full">
                <SearchResult data={data} />
            </div>
        </div>
    );
}

export default SearchPage;
