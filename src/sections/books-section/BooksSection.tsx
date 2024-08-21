import React from 'react';

import './BooksSection.css';
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
        <section className="books-section">
            <h2>{title}</h2>
            <h5>{subTitle}</h5>
            <h6>{inquireNow}</h6>
            <div className="books-grid">
                {books.map(book => {
                    return (
                        <div key={book.id} className="book-card">
                            <div className="book-image">
                                <img src={book.imageSrc} alt="Doughnuts And Doom" />
                            </div>
                            <div className="book-title">{book.title}</div>
                            <a href="#">View Book Details</a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default BooksSection;
