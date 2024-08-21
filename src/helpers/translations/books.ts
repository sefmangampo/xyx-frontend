import { useTranslation } from 'react-i18next';

export const useBooksTranslations = () => {
    const { t } = useTranslation();

    return {
        title: t('books_section.title'),
        subTitle: t('books_section.sub_title'),
        inquireNow: t('common.avail_discount'),
    };
};
