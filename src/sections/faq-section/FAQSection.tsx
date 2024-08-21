import React from 'react';
import { useFAQTranslations } from '@helpers/translations';
import AccordionGroup from '@components/accordion/AccordionGroup';

import './FAQSection.css';

function FAQSection() {
    const { title, dedicatedTitle, dedicatedDetails, otherDetails, otherTitle } =
        useFAQTranslations();

    const faqData = [
        {
            key: 1,
            title: dedicatedTitle,
            content: dedicatedDetails,
        },
        {
            key: 2,
            title: otherTitle,
            content: otherDetails,
        },
        {
            key: 3,
            title: otherTitle,
            content: otherDetails,
        },
        {
            key: 4,
            title: otherTitle,
            content: otherDetails,
        },
    ];

    return (
        <div className="faq-container">
            <div className="content">
                <div className="title">{title}</div>
                <div className="accordion-group">
                    <AccordionGroup data={faqData} />
                </div>
            </div>
        </div>
    );
}

export default FAQSection;
