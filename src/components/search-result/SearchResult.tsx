import React from 'react';
import { useAppContext } from '@hooks/useAppContext';
import useBookImages from '@hooks/useBookImages';

const SearchResult: React.FC = () => {
    const { state } = useAppContext();
    const { apiResult } = state;
    const { getImageByName } = useBookImages();

    if (!apiResult) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-3xl">No results found.</div>
            </div>
        );
    }

    const { image, isbn_13, price, publisher, edition, year, title, authors } = apiResult;
    const bookImage = getImageByName(image);

    return (
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 p-6">
            <div className="flex-shrink-0">
                <img
                    src={bookImage || '/path/to/default-image.jpg'} // Fallback image if `bookImage` is invalid
                    alt={title || 'Book Image'}
                    className="h-90 w-72 object-cover"
                />
            </div>
            <div className="flex-1 flex flex-col gap-6">
                <div className="text-2xl font-bold">{title || 'Unknown Title'}</div>
                <div className="text-xl font-semibold">by {authors || 'Unknown Author'}</div>
                <div className="flex flex-col gap-2">
                    <Detail label="Edition" value={edition || 'Not available'} />
                    <Detail label="Price" value={price || 'Not available'} />
                    <Detail label="ISBN" value={isbn_13 || 'Not available'} />
                    <Detail
                        label="Publication Year"
                        value={year ? year.toString() : 'Not available'}
                    />
                    <Detail label="Publisher" value={publisher?.name || 'Unknown'} />
                </div>
            </div>
        </div>
    );
};

const Detail: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="flex items-start gap-4">
        <div className="text-lg font-bold">{label}:</div>
        <div className="text-lg text-blue-700">{value}</div>
    </div>
);

export default SearchResult;
