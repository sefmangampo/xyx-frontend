import React from 'react';
import { useHeroTranslations } from '@helpers/translations';
import heroImage from '@assets/icons/hero_illustration.svg';

import { Button } from '@components/button';

function CheapestSection() {
    const { cheapestTitle, cheapsetSubTitle, cheapsetDetails, cheapsetCTA } = useHeroTranslations();

    const clickHandler = () => {};

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 px-6 sm:px-10 lg:px-20 py-10 mx-auto max-w-screen-xl">
            <div className="flex flex-col items-start gap-8 text-black w-full max-w-xs sm:max-w-sm lg:max-w-md">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none">
                    {cheapestTitle}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-purple-700 leading-tight">
                    {cheapsetSubTitle}
                </div>
                <div className="text-lg sm:text-xl font-normal">{cheapsetDetails}</div>
                <div>
                    <Button width="150px" label={cheapsetCTA} onClick={clickHandler} />
                </div>
            </div>

            <div className="flex justify-center items-center w-full max-w-xs sm:max-w-sm lg:max-w-md">
                <img
                    src={heroImage}
                    alt="hero icon, girl sitting on book"
                    className="w-full h-auto max-w-[500px] max-h-[500px] object-contain"
                />
            </div>
        </div>
    );
}

export default CheapestSection;
