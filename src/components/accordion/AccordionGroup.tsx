import React from 'react';
import Accordion, { AccordionProps } from './Accordion';

import './AccordionGroup.css';

interface AccordionGroupProps {
    data: AccordionProps[];
}

function AccordionGroup({ data }: AccordionGroupProps) {
    if (data.length == 0) return <></>;

    return (
        <div className="accordion-group-container">
            {data.map(({ key, ...accordionItem }) => (
                <Accordion key={key} {...accordionItem} />
            ))}
        </div>
    );
}

export default AccordionGroup;
