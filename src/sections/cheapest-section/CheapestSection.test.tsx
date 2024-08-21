import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import CheapestSection from './CheapestSection';

vi.mock('@helpers/translations', () => ({
    useHeroTranslations: () => ({
        cheapestTitle: 'Cheapest Title',
        cheapsetSubTitle: 'Cheapest Subtitle',
        cheapsetDetails: 'Details about the cheapest option.',
        cheapsetCTA: 'Call to Action',
    }),
}));

describe('CheapestSection Component', () => {
    it('should render the cheapest title correctly', () => {
        render(<CheapestSection />);
        expect(screen.getByText('Cheapest Title')).toBeInTheDocument();
    });

    it('should render the cheapest subtitle correctly', () => {
        render(<CheapestSection />);
        expect(screen.getByText('Cheapest Subtitle')).toBeInTheDocument();
    });

    it('should render the details text correctly', () => {
        render(<CheapestSection />);

        expect(screen.getByText(/Details about the cheapest option./i)).toBeInTheDocument();
    });

    it('should render the call to action button correctly', () => {
        render(<CheapestSection />);
        expect(screen.getByText('Call to Action')).toBeInTheDocument();
    });

    it('should render the hero image correctly', () => {
        render(<CheapestSection />);
        const imgElement = screen.getByAltText('hero icon, girl sitting on book');
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', expect.stringContaining('hero_illustration.svg'));
    });
});
