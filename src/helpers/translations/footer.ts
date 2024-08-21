import { useTranslation } from 'react-i18next';

export const useFooterTranslations = () => {
    const { t } = useTranslation();

    return {
        footerText: t('footer.left_area'),
        emailAddress: t('footer.email'),
        menuText: t('footer.menu.menu'),
        shopAll: t('footer.menu.shop_all'),
        aboutUs: t('footer.menu.about_us'),
        community: t('footer.menu.community'),
        faq: t('footer.menu.faq'),
        supportText: t('footer.support.support'),
        shipping: t('footer.support.shipping'),
        helpFaq: t('footer.support.help_and_faq'),
        terms: t('footer.support.terms'),
        privacy: t('footer.support.privacy'),
        contact: t('footer.support.contact'),
        login: t('footer.support.login'),
        resourcesText: t('footer.resources'),
    };
};
