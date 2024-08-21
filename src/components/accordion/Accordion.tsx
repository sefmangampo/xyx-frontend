import React, { useState, useRef, useEffect } from 'react';
import AccordionIcon from '@assets/icons/collapse.svg';

import './Accordion.css';

export interface AccordionProps {
    key: number;
    title: string;
    content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState('0px');
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);

    return (
        <div>
            <div onClick={toggleAccordion} className="accordion-header">
                <div className="accordion-title">{title}</div>
                <img
                    src={AccordionIcon}
                    alt="Toggle Accordion"
                    className={`accordion-icon ${isOpen ? 'accordion-icon-rotated' : 'accordion-icon-not-rotated'}`}
                />
            </div>
            <div
                ref={contentRef}
                className={`accordion-content ${isOpen ? 'accordion-content-open' : 'accordion-content-closed'}`}
                style={{ maxHeight: height }}
            >
                <div>{content}</div>
            </div>
        </div>
    );
};

export default Accordion;
