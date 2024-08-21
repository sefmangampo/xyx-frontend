import React from 'react';
import { useHeroTranslations } from '@helpers/translations';

function Banner() {
    const { saveUp500 } = useHeroTranslations();

    return (
        <div
            className="bg-cover bg-center text-white font-bold text-center py-2 px-4"
            style={{ backgroundImage: 'url(/src/assets/backgrounds/promo.png)' }}
        >
            {saveUp500}
        </div>
    );
}

export default Banner;
