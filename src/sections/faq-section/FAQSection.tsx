import React from 'react';
import { useFAQTranslations } from '@helpers/translations';
import AccordionGroup from '@components/accordion/AccordionGroup';

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
        <div className="bg-gray-200 flex flex-col items-center justify-center px-4 sm:px-5 md:px-6 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center text-start">
                <div className="text-black mb-10 font-bold text-4xl md:text-3xl sm:text-2xl xs:text-xl lg:text-s">
                    {title}
                </div>
                <div className="w-full md:w-3/4 lg:w-1/2">
                    <AccordionGroup data={faqData} />
                </div>
            </div>
        </div>
    );
}

export default FAQSection;
