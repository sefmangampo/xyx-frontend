import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useBooksTranslations } from '@helpers/translations';
import { BookResult } from '@interfaces/book';
import useBookImages from '@hooks/useBookImages';
const isbnList = [ '9781649360809', '9781603095099', '9781603093989'];

function BooksSection() {
    const [books, setBooks] = useState<BookResult[]>([]);
    const { title, subTitle, buttonCaption } = useBooksTranslations();

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
        <section className="flex flex-col justify-center items-center text-center mt-24">
            <h2 className="flex text-4xl lg:text-6xl mb-10 font-bold text-gray-800 ">{title}</h2>
            <h5 className="flex text-2xl mb-6 w-[70vw]">{subTitle}</h5>
            {/* <h6 className="text-xl mb-10">{inquireNow}</h6> */}
            <div className="flex flex-wrap items-center align-middle w-full justify-center gap-20">
                {books.map(book => (
                    <div
                        key={book.isbn_13}
                        className="flex flex-col  max-w-sm text-left"
                    >
                        <div className="flex items-center justify-center bg-white bg-opacity-50 rounded-lg p-2 mb-5">
                            <img
                                src={getImageByName(book.image)}
                                alt={book.title}
                                className="w-full rounded-md"
                            />
                        </div>
                        <div className="text-white font-bold text-3xl mb-5">{book.title}</div>
                        <a href="#" className="text-blue-300 text-base font-bold">
                            {buttonCaption}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BooksSection;
