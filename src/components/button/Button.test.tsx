import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
    it('should render the button with the provided label', () => {
        render(<Button label="Click me" onClick={() => {}} />);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('should call the onClick handler when clicked', async () => {
        const handleClick = vi.fn();
        render(<Button label="Click me" onClick={handleClick} />);

        const button = screen.getByText('Click me');
        await userEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
