import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useBooksTranslations } from '@helpers/translations';
import { BookResult } from '@interfaces/book';
import useBookImages from '@hooks/useBookImages';
const isbnList = ['9781603093989', '9781603095099', '9781649360809'];

function BooksSection() {
    const [books, setBooks] = useState<BookResult[]>([]);
    const { title, subTitle, inquireNow } = useBooksTranslations();

    const { getImageByName } = useBookImages();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const responses = await Promise.all(
                    isbnList.map(isbn =>
                        axios.get<BookResult>(
                            `http://localhost:3000/api/books/search?isbn=${isbn}`,
                        ),
                    ),
                );

                const fetchedBooks = responses.map(response => response.data);

                setBooks(fetchedBooks);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);
    return (
        <section className="text-center mt-24">
            <h2 className="text-4xl mb-10 text-gray-800">{title}</h2>
            <h5 className="text-2xl mb-6">{subTitle}</h5>
            <h6 className="text-xl mb-10">{inquireNow}</h6>
            <div className="flex flex-wrap justify-center gap-8">
                {books.map(book => (
                    <div
                        key={book.isbn_13}
                        className="p-5 max-w-xs text-left bg-white shadow-md rounded-lg"
                    >
                        <div className="flex items-center justify-center bg-gray-200 rounded-lg p-2 mb-5">
                            <img
                                src={getImageByName(book.image)}
                                alt={book.title}
                                className="w-full rounded-md"
                            />
                        </div>
                        <div className="text-gray-800 font-bold text-lg mb-5">{book.title}</div>
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
