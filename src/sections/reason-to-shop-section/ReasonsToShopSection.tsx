import React from 'react';
import ReasonCard from './components/ReasonCard';

import { boxIcon, helpIcon, pigIcon } from '@assets/icons';
import { useReasonsTranslations } from '@helpers/translations';

const ReasonsToShopSection: React.FC = () => {
    const {
        super: superTitle,
        reason,
        freeShippingTitle,
        freeShippingSubTitle,
        dedicatedSupportTitle,
        dedicatedSupportSubTitle,
        saveUpTitle,
        saveUpSubTitle,
    } = useReasonsTranslations();

    const reasonsData = [
        {
            key: 1,
            icon: boxIcon,
            title: freeShippingTitle,
            details: freeShippingSubTitle,
        },
        {
            key: 2,
            icon: helpIcon,
            title: dedicatedSupportTitle,
            details: dedicatedSupportSubTitle,
        },
        {
            key: 3,
            icon: pigIcon,
            title: saveUpTitle,
            details: saveUpSubTitle,
        },
    ];

    return (
        <div className="mt-24 w-[100vw] flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-start">
                <div className=" text-yellow-500 lg:ml-28 lg:text-left text-center w-full text-xl mb-2">{superTitle}</div>
                <div className="text-white lg:ml-28 lg:text-4xl text-2xl w-full font-bold text-center lg:text-left">{reason}</div>
            </div>

            <div className="flex flex-wrap gap-5 justify-center w-full mt-10">
                {reasonsData.map(({ key, ...reason }) => (
                    <ReasonCard key={key} {...reason} />
                ))}
            </div>
        </div>
    );
};

export default ReasonsToShopSection;
