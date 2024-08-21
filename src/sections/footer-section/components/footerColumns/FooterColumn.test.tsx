import React from 'react';
import { render, screen } from '@testing-library/react';
import FooterColumn from './FooterColumn';

// Sample data to be used in tests
const mockData = {
    header: 'Footer Header',
    links: [
        { id: 1, label: 'Link 1', url: 'https://example.com/link1' },
        { id: 2, label: 'Link 2', url: 'https://example.com/link2' },
        { id: 3, label: 'Link 3', url: 'https://example.com/link3' },
    ],
};

describe('FooterColumn Component', () => {
    it('should render the header correctly', () => {
        render(<FooterColumn data={mockData} />);
        expect(screen.getByText('Footer Header')).toBeInTheDocument();
    });

    it('should render the links correctly', () => {
        render(<FooterColumn data={mockData} />);

        // Check for each link label and URL
        mockData.links.forEach(({ label, url }) => {
            const linkElement = screen.getByText(label);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement.closest('a')).toHaveAttribute('href', url);
        });
    });

    it('should render the correct number of links', () => {
        render(<FooterColumn data={mockData} />);
        expect(screen.getAllByRole('listitem')).toHaveLength(mockData.links.length);
    });
});
