import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest'; // If using Vitest
import Banner from './Banner';

// Mock the translation hook
vi.mock('@helpers/translations', () => ({
    useHeroTranslations: () => ({
        saveUp500: 'Save up to $500!',
    }),
}));

describe('Banner Component', () => {
    it('should render the translation text correctly', () => {
        render(<Banner />);
        expect(screen.getByText('Save up to $500!')).toBeInTheDocument();
    });

    it('should apply the correct background image style', () => {
        render(<Banner />);
        const bannerElement = screen.getByText('Save up to $500!');
        expect(bannerElement).toHaveStyle(
            'background-image: url(/src/assets/backgrounds/promo.png)',
        );
    });

    it('should have the correct class names', () => {
        render(<Banner />);
        const bannerElement = screen.getByText('Save up to $500!');
        expect(bannerElement).toHaveClass('bg-cover');
        expect(bannerElement).toHaveClass('bg-center');
        expect(bannerElement).toHaveClass('text-white');
        expect(bannerElement).toHaveClass('font-bold');
        expect(bannerElement).toHaveClass('text-center');
        expect(bannerElement).toHaveClass('py-2');
        expect(bannerElement).toHaveClass('px-4');
    });
});
