import React from 'react';
import { useHeroTranslations } from '@helpers/translations';
import commitmentImage from '@assets/images/commitment.png';

import { Button } from '@components/button';

const CommitmentSection: React.FC = () => {
    const { commitmentTitle, commitmentDetails, commitmentCTA } = useHeroTranslations();

    const handler = () => {};

    return (
        <div className="mt-24 w-[90vw] px-6 sm:px-10 lg:px-24 flex flex-col lg:flex-row gap-12 lg:gap-36 justify-center items-center">
            <div className="flex justify-center items-center">
                <img
                    src={commitmentImage}
                    alt="hero icon, people on the macbook"
                    className="w-full h-auto max-w-[600px] max-h-[600px] object-contain"
                />
            </div>
            <div className="flex flex-col gap-8 sm:gap-10 w-full max-w-xs sm:max-w-sm lg:max-w-md">
                <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    {commitmentTitle}
                </div>
                <div className="text-white text-lg sm:text-xl">{commitmentDetails}</div>
                <div>
                    <Button width="150px" label={commitmentCTA} onClick={handler} />
                </div>
            </div>
        </div>
    );
};

export default CommitmentSection;
