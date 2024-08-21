import React from 'react';
import './Button.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
    height?: string;
    width?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, height = '40px', width = '100px' }) => {
    return (
        <div className="button-container">
            <input type="button" value={label} onClick={onClick} style={{ height, width }} />
        </div>
    );
};

export default Button;
