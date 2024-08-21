import React from 'react';
import ReasonCard from './components/ReasonCard';

import { boxIcon, helpIcon, pigIcon } from '@assets/icons';

import { useReasonsTranslations } from '@helpers/translations';

import './ReasonsToShopSection.css';

function ReasonsToShopSection() {
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
        <div className="reason-container">
            <div className="reason-header">
                <div className="super-title">{superTitle}</div>
                <div className="reason-to-shop">{reason}</div>
            </div>

            <div className="reason-cards">
                {reasonsData.map(({ key, ...reason }) => {
                    return <ReasonCard key={key} {...reason} />;
                })}
            </div>
        </div>
    );
}

export default ReasonsToShopSection;
