import { useCallback } from 'react';

const useFormatISBN = () => {
    const formatISBN = useCallback((value: string) => {
        console.log('value', value);

        const cleaned = value.replace(/\D/g, '');

        if (cleaned.startsWith('978') && cleaned.length > 3) {
            const prefix = cleaned.slice(0, 3);
            const group = cleaned.slice(3, 5);
            const publisher = cleaned.slice(5, 9);
            const title = cleaned.slice(9, 13);
            const checkDigit = cleaned.slice(13, 14);

            return `${prefix}-${group}-${publisher}-${title}-${checkDigit}`;
        } else if (cleaned.startsWith('1') && cleaned.length > 1) {
            const prefix = cleaned.slice(0, 1);
            const rest = cleaned.slice(1);
            return `${prefix}-${rest}`;
        } else if (cleaned.length === 10) {
            const prefix = cleaned.slice(0, 1);
            const group = cleaned.slice(1, 4);
            const publisher = cleaned.slice(4, 7);
            const title = cleaned.slice(7, 9);
            const checkDigit = cleaned.slice(9);

            return `${prefix}-${group}-${publisher}-${title}-${checkDigit}`;
        }

        return value;
    }, []);

    return formatISBN;
};

export default useFormatISBN;
