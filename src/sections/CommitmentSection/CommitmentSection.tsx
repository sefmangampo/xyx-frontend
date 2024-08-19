import { useHeroTranslations } from '@helpers/translations'
import commitmentImage from '@assets/images/commitment.png'

function CommmitmentSection() {
  const { commitmentTitle, commitmentDetails, commitmentCTA } =
    useHeroTranslations()

  return (
    <>
      <div className="commitment-container">
        <div className="left-segment">
          <div className="img-container">
            <img src={commitmentImage} alt="hero icon, people on the macbook" />
          </div>
        </div>

        <div className="right-segment">
          <div className="title">{commitmentTitle}</div>
          <div className="details">{commitmentDetails}</div>
          <div className="cta">
            <button>{commitmentCTA}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommmitmentSection
