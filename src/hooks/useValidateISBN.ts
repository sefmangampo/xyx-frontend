import { useState } from 'react';

const useValidateISBN = () => {
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const validateISBN = (value: string): boolean => {
        const cleaned = value.replace(/[^0-9Xx]/g, '');

        if (cleaned.length === 10) {
            return isValidISBN10(cleaned);
        } else if (cleaned.length === 13) {
            return isValidISBN13(cleaned);
        }

        return false;
    };

    const isValidISBN10 = (isbn: string): boolean => {
        if (isbn.length !== 10) return false;
        const checkDigit = isbn[9];
        const sum = isbn
            .slice(0, 9)
            .split('')
            .reduce((acc, digit, index) => acc + parseInt(digit) * (10 - index), 0);
        const mod = sum % 11;
        const calculatedCheckDigit = mod === 0 ? '0' : mod === 1 ? 'X' : (11 - mod).toString();
        return checkDigit.toUpperCase() === calculatedCheckDigit;
    };

    const isValidISBN13 = (isbn: string): boolean => {
        if (isbn.length !== 13) return false;
        const sum = isbn
            .slice(0, 12)
            .split('')
            .reduce((acc, digit, index) => acc + parseInt(digit) * (index % 2 === 0 ? 1 : 3), 0);
        const checkDigit = (10 - (sum % 10)) % 10;
        return parseInt(isbn[12]) === checkDigit;
    };

    const validate = (value: string) => {
        const result = validateISBN(value);
        setIsValid(result);
        return result;
    };

    return { isValid, validate };
};

export default useValidateISBN;
