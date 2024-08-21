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
        <div className="mt-24 flex flex-col items-center justify-center">
            <div className="w-4/5 flex flex-col items-start">
                <div className="text-gold text-xl mb-2">{superTitle}</div>
                <div className="text-white text-4xl font-bold text-center">{reason}</div>
            </div>

            <div className="flex flex-wrap gap-5 justify-center w-full">
                {reasonsData.map(({ key, ...reason }) => (
                    <ReasonCard key={key} {...reason} />
                ))}
            </div>
        </div>
    );
};

export default ReasonsToShopSection;
