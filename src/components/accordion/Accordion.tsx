import React, { useState, useRef, useEffect } from 'react';
import AccordionIcon from '@assets/icons/collapse.svg';
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
            <div
                onClick={toggleAccordion}
                className="cursor-pointer p-2 flex justify-between items-center select-none"
            >
                <div className="text-xl font-bold text-purple-800">{title}</div>
                <img
                    src={AccordionIcon}
                    alt="Toggle Accordion"
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'} w-5 h-5`}
                />
            </div>
            <div
                ref={contentRef}
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'p-2 max-h-screen' : 'p-0 max-h-0'}`}
                style={{ maxHeight: height }}
            >
                <div className="text-base">{content}</div>
            </div>
        </div>
    );
};

export default Accordion;
