import React from 'react';
import { useHeroTranslations } from '@helpers/translations';
import heroImage from '@assets/icons/hero_illustration.svg';

import { Button } from '@components/button';

import './CheapestSection.css';

function CheapestSection() {
    const { cheapestTitle, cheapsetSubTitle, cheapsetDetails, cheapsetCTA } = useHeroTranslations();

    const clickHandler = () => {};

    return (
        <div className="cheapest-container">
            <div className="left-segment">
                <div className="cheap-title">{cheapestTitle}</div>
                <div className="subtitle">{cheapsetSubTitle}</div>
                <div className="cheap-details">{cheapsetDetails}</div>
                <div className="cta">
                    <Button width="150px" label={cheapsetCTA} onClick={clickHandler} />
                </div>
            </div>

            <div className="right-segment">
                <div className="img-container">
                    <img src={heroImage} alt="hero icon, girl sitting on book" />
                </div>
            </div>
        </div>
    );
}

export default CheapestSection;
