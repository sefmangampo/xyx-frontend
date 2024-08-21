import React from 'react';
import './Nav.css';

import appLogo from '@assets/icons/xyz.svg';
import globeIcon from '@assets/icons/globe.svg';

import { useHeroTranslations } from '@helpers/translations';
import SearchInput from '@components/search-input/SearchInput';
import { Button } from '@components/button';

function Nav() {
    const { navHome, navRent, navBuy, navSell, navContact } = useHeroTranslations();

    return (
        <div className="nav-container">
            <div className="nav-icon">
                <img src={appLogo} alt="app logo" />
            </div>
            <div className="nav-search">
                <SearchInput />
            </div>
            <div className="nav-links">
                <ul>
                    <li>{navHome}</li>
                    <li>{navRent}</li>
                    <li>{navBuy}</li>
                    <li>{navSell}</li>
                </ul>
            </div>
            <div className="nav-lang">
                <img src={globeIcon} alt="globe" />
                <span>En</span>
            </div>
            <div className="nav-cta">
                <Button label={navContact} onClick={() => {}} />
            </div>
        </div>
    );
}

export default Nav;
