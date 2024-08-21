import React from 'react';
import { render, screen } from '@testing-library/react';
import ReasonCard from './ReasonCard';

describe('ReasonCard Component', () => {
    const defaultProps = {
        icon: '/path/to/icon.png',
        title: 'Sample Title',
        details: 'Sample details about the reason card.',
    };

    it('should render the icon image', () => {
        render(<ReasonCard {...defaultProps} />);
        const iconElement = screen.getByAltText('Sample Title');
        expect(iconElement).toBeInTheDocument();
        expect(iconElement).toHaveAttribute('src', '/path/to/icon.png');
    });

    it('should render the title text', () => {
        render(<ReasonCard {...defaultProps} />);
        expect(screen.getByText('Sample Title')).toBeInTheDocument();
    });

    it('should render the details text', () => {
        render(<ReasonCard {...defaultProps} />);
        expect(screen.getByText('Sample details about the reason card.')).toBeInTheDocument();
    });
});
