import ReasonCard from './components/ReasonCard'

import boxIcon from '@assets/icons/box.svg'
import chatIcon from '@assets/icons/help.svg'
import pigIcon from '@assets/icons/piggy_bank.svg'
import { useReasonsTranslations } from '@helpers/translations'

function ReasonsToShopSection() {
  const {
    super: superTitle,
    reason,
    freeShippingTitle,
    freeShippingSubTitle,
    dedicatedSupportTitle,
    dedicatedSupportSubTitle,
    saveUpTitle,
    saveUpSubTitle,
  } = useReasonsTranslations()

  const reasonsData = [
    {
      key: 1,
      icon: boxIcon,
      title: freeShippingTitle,
      details: freeShippingSubTitle,
    },
    {
      key: 2,
      icon: chatIcon,
      title: dedicatedSupportTitle,
      details: dedicatedSupportSubTitle,
    },
    {
      key: 3,
      icon: pigIcon,
      title: saveUpTitle,
      details: saveUpSubTitle,
    },
  ]

  return (
    <>
      <div className="">
        <div className="super-title">{superTitle}</div>
        <div className="reason-to-shop">{reason}</div>
      </div>

      {reasonsData.map(({ key, ...reason }) => {
        return <ReasonCard key={key} {...reason} />
      })}
    </>
  )
}

export default ReasonsToShopSection
