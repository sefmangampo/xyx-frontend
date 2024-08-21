import { useMemo } from 'react';
import { useFooterTranslations } from '@helpers/translations';
import { FooterColumnProps } from './Footer';

type FooterOptions = {
    footerText: string;
    emailAddress: string;
    menuOptions: FooterColumnProps;
    supportOptions: FooterColumnProps;
    resourcesOptions: FooterColumnProps;
};

function useFooterOptions(): FooterOptions {
    const {
        footerText,
        emailAddress,
        menuText,
        shopAll,
        aboutUs,
        community,
        faq,
        supportText,
        shipping,
        helpFaq,
        terms,
        privacy,
        contact,
        login,
        resourcesText,
    } = useFooterTranslations();

    const menuOptions = useMemo(
        () => ({
            header: menuText,
            links: [
                { id: 1, label: shopAll, url: shopAll },
                { id: 2, label: aboutUs, url: aboutUs },
                { id: 3, label: community, url: community },
                { id: 4, label: faq, url: faq },
            ],
        }),
        [menuText, shopAll, aboutUs, community, faq],
    );

    const supportOptions = useMemo(
        () => ({
            header: supportText,
            links: [
                { id: 1, label: shipping, url: shipping },
                { id: 2, label: helpFaq, url: helpFaq },
                { id: 3, label: terms, url: terms },
                { id: 4, label: privacy, url: privacy },
                { id: 5, label: contact, url: contact },
                { id: 6, label: login, url: login },
            ],
        }),
        [supportText, shipping, helpFaq, terms, privacy, contact, login],
    );

    const resourcesOptions = useMemo(
        () => ({
            header: resourcesText,
            links: [
                { id: 1, label: shipping, url: shipping },
                { id: 2, label: helpFaq, url: helpFaq },
                { id: 3, label: terms, url: terms },
                { id: 4, label: privacy, url: privacy },
                { id: 5, label: contact, url: contact },
                { id: 6, label: login, url: login },
            ],
        }),
        [resourcesText, shipping, helpFaq, terms, privacy, contact, login],
    );

    return {
        emailAddress,
        footerText,
        menuOptions,
        supportOptions,
        resourcesOptions,
    };
}

export default useFooterOptions;
