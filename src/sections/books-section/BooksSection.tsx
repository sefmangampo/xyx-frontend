import React from 'react';
import { Doughnuts, BendOfLuck, UnderwaterWelder } from '@assets/books';
import { useBooksTranslations } from '@helpers/translations';

const books = [
    {
        id: 1,
        title: 'Doughnuts And Doom',
        imageSrc: Doughnuts,
        href: 'ssdsds',
    },
    {
        id: 2,
        title: 'The Bend Of Luck',
        imageSrc: BendOfLuck,
        href: 'ssdsds',
    },
    {
        id: 3,
        title: 'The Underwater Welder',
        imageSrc: UnderwaterWelder,
        href: 'ssdsds',
    },
];

function BooksSection() {
    const { title, subTitle, inquireNow } = useBooksTranslations();

    return (
        <section className="text-center mt-24">
            <h2 className="text-4xl mb-10 text-gray-800">{title}</h2>
            <h5 className="text-2xl mb-6">{subTitle}</h5>
            <h6 className="text-xl mb-10">{inquireNow}</h6>
            <div className="flex flex-wrap justify-center gap-8">
                {books.map(book => (
                    <div
                        key={book.id}
                        className="p-5 max-w-xs text-left bg-white shadow-md rounded-lg"
                    >
                        <div className="flex items-center justify-center bg-gray-200 rounded-lg p-2 mb-5">
                            <img
                                src={book.imageSrc}
                                alt={book.title}
                                className="w-full rounded-md"
                            />
                        </div>
                        <div className="text-white font-bold text-lg mb-5">{book.title}</div>
                        <a href="#" className="text-blue-500 text-base font-bold">
                            View Book Details
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BooksSection;
