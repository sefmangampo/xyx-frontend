import { useHeroTranslations } from '@helpers/translations'
import heroImage from '@assets/icons/hero_illustration.svg'

function CheapestSection() {
  const { cheapestTitle, cheapsetSubTitle, cheapsetDetails, cheapsetCTA } =
    useHeroTranslations()

  return (
    <>
      <div className="commitment-container">
        <div className="left-segment">
          <div className="title">{cheapestTitle}</div>
          <div className="subtitle">{cheapsetSubTitle}</div>
          <div className="details">{cheapsetDetails}</div>
          <div className="cta">
            <button>{cheapsetCTA}</button>
          </div>
        </div>

        <div className="right-segment">
          <div className="img-container">
            <img src={heroImage} alt="hero icon, girl sitting on book" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CheapestSection
