import React from 'react';
import './Banner.css';
import { useHeroTranslations } from '@helpers/translations';

function Banner() {
    const { saveUp500 } = useHeroTranslations();

    return <div className="banner-container">{saveUp500}</div>;
}

export default Banner;
