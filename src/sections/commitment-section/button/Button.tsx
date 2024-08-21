import React from 'react';
import './Button.css';

interface ButtonProps {
    label: string;
    handler: () => void;
    height?: string;
    width?: string;
}

const Button: React.FC<ButtonProps> = ({ label, handler, height = '40px', width = '100px' }) => {
    return (
        <div className="button-container">
            <input
                type="button"
                value={label}
                onClick={handler}
                style={{ height, width }} // Apply height inline
            />
        </div>
    );
};

export default Button;
