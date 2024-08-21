import { useTranslation } from 'react-i18next';

export const useFAQTranslations = () => {
    const { t } = useTranslation();

    return {
        title: t('faq_section.title'),
        dedicatedTitle: t('faq_section.dedicated.header'),
        dedicatedDetails: t('faq_section.dedicated.details'),
        otherTitle: t('faq_section.others.header'),
        otherDetails: t('faq_section.others.details'),
    };
};
