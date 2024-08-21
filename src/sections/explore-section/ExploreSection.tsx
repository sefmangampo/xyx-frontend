import React from 'react';

import BooksSection from '@sections/books-section/BooksSection';
import ReasonsToShopSection from '@sections/reason-to-shop-section/ReasonsToShopSection';
import TestimonialSection from '@sections/testimonial-section/TestimonialsSection';

import './ExploreSection.css';

function ExploreSection() {
    return (
        <div className="explore-container">
            <BooksSection />
            <ReasonsToShopSection />
            <TestimonialSection />
        </div>
    );
}

export default ExploreSection;
