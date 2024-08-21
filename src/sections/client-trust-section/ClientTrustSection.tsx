import React from 'react';

import { useHeroTranslations } from '@helpers/translations';

import {
    binaneLogo,
    bitcoinLogo,
    solanaLogo,
    etheriumLogo,
    tetherLogo,
    xrpLogo,
} from '@assets/brands';

import './ClientTrustSection.css';

const clientData = [
    {
        key: 1,
        name: 'Binance',
        logo: binaneLogo,
    },
    {
        key: 2,
        name: 'Bitcoin',
        logo: bitcoinLogo,
    },
    {
        key: 3,
        name: 'Solana',
        logo: solanaLogo,
    },
    {
        key: 4,
        name: 'Etherium',
        logo: etheriumLogo,
    },
    {
        key: 5,
        name: 'Tether',
        logo: tetherLogo,
    },
    {
        key: 6,
        name: 'XRP',
        logo: xrpLogo,
    },
];

function ClientTrustSection() {
    const { trusted, clients } = useHeroTranslations();

    return (
        <>
            <div className="trust-container">
                <div className="title">
                    <span className="title_trusted">{trusted}</span>
                    <span className="title_client">{clients}</span>
                </div>
                <div className="clients">
                    {clientData.map(({ key, ...client }) => {
                        return (
                            <div key={key} className="client-card">
                                <div className="img">
                                    <img src={client.logo} alt="logo" />
                                </div>
                                <div className="client-name">{client.name}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default ClientTrustSection;
