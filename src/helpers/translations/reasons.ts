import { useTranslation } from 'react-i18next';

export const useReasonsTranslations = () => {
    const { t } = useTranslation();

    return {
        super: t('reason_section.super'),
        reason: t('reason_section.reason'),
        freeShippingTitle: t('reason_section.free_shipping.title'),
        freeShippingSubTitle: t('reason_section.free_shipping.details'),
        dedicatedSupportTitle: t('reason_section.dedicated_support.title'),
        dedicatedSupportSubTitle: t('reason_section.dedicated_support.details'),
        saveUpTitle: t('reason_section.save_up.title'),
        saveUpSubTitle: t('reason_section.save_up.details'),
    };
};
