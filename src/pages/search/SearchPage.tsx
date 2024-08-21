import React from 'react';
import SearchResult from '@components/search-result/SearchResult';

import './SearchPage.css';

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
        <div className="search-page-container">
            <div className="search-label">Search Result</div>
            <div className="result-area">
                <SearchResult data={data} />
            </div>
        </div>
    );
}

export default SearchPage;
