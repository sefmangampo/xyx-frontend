import { useTranslation } from 'react-i18next'

export const useHeroTranslations = () => {
  const { t } = useTranslation()

  return {
    saveUp500: t('common.save_up'),
    cheapestTitle: t('hero_section.cheapest.title'),
    cheapsetSubTitle: t('hero_section.cheapest.sub_title'),
    cheapsetDetails: t('hero_section.cheapest.details'),
    cheapsetCTA: t('hero_section.cheapest.cta'),
    commitmentTitle: t('hero_section.commitment.title'),
    commitmentDetails: t('hero_section.commitment.details'),
    commitmentCTA: t('hero_section.commitment.cta'),
    trusted: t('hero_section.footer.trusted'),
    navSearch: t('hero_section.nav.search'),
    navHome: t('hero_section.nav.home'),
    navRent: t('hero_section.nav.rent'),
    navBuy: t('hero_section.nav.buy'),
    navSell: t('hero_section.nav.sell'),
    navContact: t('hero_section.nav.contact'),
  }
}
