import React from 'react'
import Footer from '../sections/FooterSection/Footer'
import BooksSection from '../sections/BooksSection/BooksSection'
import ReasonsToShopSection from '../sections/ReasonsToShopSection/ReasonsToShoeSection'
import TestimonialSection from '../sections/testimonialSection/TestimonialsSection'
import CheapestSection from '../sections/CheapestSection/CheapestSection'
import CommmitmentSection from '../sections/CommitmentSection/CommitmentSection'
import ClientTrustSection from '../sections/ClientTrustSection/ClientTrustSection'
import FAQSection from '../sections/FAQSection/FAQSection'

const HomePage: React.FC = () => {
  return (
    <>
      <CommmitmentSection />
      <CheapestSection />
      <ClientTrustSection />
      <BooksSection />
      <Footer />
      <ReasonsToShopSection />
      <TestimonialSection />
      <FAQSection />
    </>
  )
}

export default HomePage
