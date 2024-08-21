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

const clientData = [
    { key: 1, name: 'Binance', logo: binaneLogo },
    { key: 2, name: 'Bitcoin', logo: bitcoinLogo },
    { key: 3, name: 'Solana', logo: solanaLogo },
    { key: 4, name: 'Etherium', logo: etheriumLogo },
    { key: 5, name: 'Tether', logo: tetherLogo },
    { key: 6, name: 'XRP', logo: xrpLogo },
];

const ClientTrustSection: React.FC = () => {
    const { trusted, clients } = useHeroTranslations();

    return (
        <div className="flex flex-col items-center w-full h-auto  p-4">
            <div className="text-white text-center font-bold text-3xl mb-9">
                <span className="text-yellow-500">{trusted}</span>
                <span className="text-gold">{clients}</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-between gap-6 w-full md:w-[80%] px-2">
                {clientData.map(({ key, name, logo }) => (
                    <div
                        key={key}
                        className="flex flex-col items-center w-1/3 sm:w-1/4 md:w-auto gap-3"
                    >
                        <img src={logo} alt={`${name} logo`} className="h-10 w-10" />
                        <div className="text-white font-semibold text-lg">{name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientTrustSection;
