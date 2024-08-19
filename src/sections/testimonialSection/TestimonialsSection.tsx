import BinanceIcon from '@assets/brands/binance_logo.svg'
import UserIcon from '@assets/images/user.png'
import RatingsIcon from '@assets/icons/star.svg'

const testimonial =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

function TestimonialSection() {
  return (
    <>
      <div className="">
        <div className="client-name">Andrew Santellan</div>
        <div className="client-position">Product Manager, Binance</div>
        <div className="client-branding">
          <div className="client-logo">
            <img src={BinanceIcon} alt="Binance icon" />
          </div>
          <div className="client-name">Binance</div>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="head-shot-icon">
          <img src={UserIcon} alt="person head image" />
        </div>
        <div className="testimonial">{testimonial}</div>
        <div className="ratings">
          <img src={RatingsIcon} alt="5 stars" />
        </div>
      </div>
    </>
  )
}

export default TestimonialSection
