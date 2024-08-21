import React from 'react';
import { render, screen } from '@testing-library/react';
import TestimonialSection from './TestimonialsSection';

describe('TestimonialSection Component', () => {
    it('should render the name and title correctly', () => {
        render(<TestimonialSection />);
        expect(screen.getByText('Andrew Santellan')).toBeInTheDocument();
        expect(screen.getByText('Product Manager, Binance')).toBeInTheDocument();
    });

    it('should render the company logo and name', () => {
        render(<TestimonialSection />);
        const binanceLogo = screen.getByAltText('Binance icon');
        expect(binanceLogo).toBeInTheDocument();
        expect(screen.getByText('Binance')).toBeInTheDocument();
    });

    it('should render the user image and testimonial text', () => {
        render(<TestimonialSection />);
        const userImage = screen.getByAltText('person head image');
        expect(userImage).toBeInTheDocument();
        expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
    });

    it('should render the ratings icon', () => {
        render(<TestimonialSection />);
        const ratingsIcon = screen.getByAltText('5 stars');
        expect(ratingsIcon).toBeInTheDocument();
    });
});
