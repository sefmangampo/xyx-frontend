import React from 'react';

import FAQSection from '@sections/faq-section/FAQSection';
import ExploreSection from '@sections/explore-section/ExploreSection';
import HeroSection from '@sections/hero-section/HeroSection';

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <ExploreSection />
            <FAQSection />
        </>
    );
};

export default HomePage;
