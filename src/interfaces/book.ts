import { Publisher } from './publisher';

export type BookResult = {
    image: string;
    id: number;
    title: string;
    edition: string;
    isbn_13: string;
    isbn_10: string;
    price: string;
    year: number;
    publisher: Publisher;
    authors: string;
};
