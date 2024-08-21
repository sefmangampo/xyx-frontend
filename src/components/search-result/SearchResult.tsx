import React from 'react';
import { BookResult } from '@interfaces/book';

import './SearchResult.css';
import useBookImages from '@hooks/useBookImages';

function SearchResult({ data }: { data: BookResult | null }) {
    const { getImageByName } = useBookImages();

    if (!data)
        return (
            <div className="no-results-found">
                <div className="header-text">No results found.</div>
            </div>
        );

    const { image, isbn_13, price, publisher, edition, year, title, authors } = data;

    const bookImage = getImageByName(image);

    return (
        <div className="result-container">
            <div className="image-container">
                <img src={bookImage} alt="" />
            </div>
            <div className="book-details">
                <div className="book-title">{title}</div>
                <div className="book-authors">by {authors}</div>
                <div className="book-subdetails">
                    <div className="book-caption">Edition:</div>
                    <div className="book-value">{edition}</div>
                </div>
                <div className="book-subdetails">
                    <div className="book-caption">Price:</div>
                    <div className="book-value">{price}</div>
                </div>
                <div className="book-subdetails">
                    <div className="book-caption">ISBN:</div>
                    <div className="book-value">{isbn_13}</div>
                </div>
                <div className="book-subdetails">
                    <div className="book-caption">Publication Year:</div>
                    <div className="book-value">{year}</div>
                </div>
                <div className="book-subdetails">
                    <div className="book-caption">Publisher:</div>
                    <div className="book-value">{publisher.name}</div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;
