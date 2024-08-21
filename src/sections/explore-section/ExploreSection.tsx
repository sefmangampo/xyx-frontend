import React from 'react';

import BooksSection from '@sections/books-section/BooksSection';
import ReasonsToShopSection from '@sections/reason-to-shop-section/ReasonsToShopSection';
import TestimonialSection from '@sections/testimonial-section/TestimonialsSection';

function ExploreSection() {
    return (
        <div className="flex flex-col gap-12 bg-[url('/src/assets/backgrounds/explore.png')] bg-cover">
            <BooksSection />
            <ReasonsToShopSection />
            <TestimonialSection />
        </div>
    );
}

export default ExploreSection;
