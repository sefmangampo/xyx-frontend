import React from 'react';
import { BookResult } from '@interfaces/book';
import useBookImages from '@hooks/useBookImages';

function SearchResult({ data }: { data: BookResult | null }) {
    const { getImageByName } = useBookImages();

    if (!data)
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-3xl">No results found.</div>
            </div>
        );

    const { image, isbn_13, price, publisher, edition, year, title, authors } = data;
    const bookImage = getImageByName(image);

    console.log('boks', bookImage);

    return (
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 p-6">
            <div className="flex-shrink-0">
                <img src={bookImage} alt={title} className="h-90 w-72 object-cover" />
            </div>
            <div className="flex-1 flex flex-col gap-6">
                <div className="text-2xl font-bold">{title}</div>
                <div className="text-xl font-semibold">by {authors}</div>
                <div className="flex flex-col gap-2">
                    <Detail label="Edition" value={edition} />
                    <Detail label="Price" value={price} />
                    <Detail label="ISBN" value={isbn_13} />
                    <Detail label="Publication Year" value={year + ''} />
                    <Detail label="Publisher" value={publisher.name} />
                </div>
            </div>
        </div>
    );
}

const Detail: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="flex items-start gap-4">
        <div className="text-lg font-bold">{label}:</div>
        <div className="text-lg text-blue-700">{value}</div>
    </div>
);

export default SearchResult;
