import React from 'react';

import CheapestSection from '@sections/cheapest-section/CheapestSection';
import CommmitmentSection from '@sections/commitment-section/CommitmentSection';
import ClientTrustSection from '@sections/client-trust-section/ClientTrustSection';

import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <CheapestSection />
            <CommmitmentSection />
            <ClientTrustSection />
        </div>
    );
}

export default HeroSection;
