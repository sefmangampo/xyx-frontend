import React from 'react';
import Accordion, { AccordionProps } from './Accordion';

interface AccordionGroupProps {
    data: AccordionProps[];
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ data }) => {
    if (data.length === 0) return null;

    return (
        <div className="flex w-full lg:w-[100vw]  items-center justify-center flex-col">
            {data.map(({ key, ...accordionItem }) => (
                <Accordion key={key} {...accordionItem} />
            ))}
        </div>
    );
};

export default AccordionGroup;
