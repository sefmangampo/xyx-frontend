import React from 'react';

import CheapestSection from '@sections/cheapest-section/CheapestSection';
import CommitmentSection from '@sections/commitment-section/CommitmentSection';
import ClientTrustSection from '@sections/client-trust-section/ClientTrustSection';

const HeroSection: React.FC = () => {
    return (
        <div className="bg-[url('/src/assets/backgrounds/banner.png')] bg-cover bg-center bg-no-repeat h-auto flex flex-col">
            <CheapestSection />
            <CommitmentSection />
            <ClientTrustSection />
        </div>
    );
};

export default HeroSection;
