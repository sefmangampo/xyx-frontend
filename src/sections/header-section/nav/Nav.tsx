import React, { useState } from 'react';
import appLogo from '@assets/icons/xyz.svg';
import globeIcon from '@assets/icons/globe.svg';
import { useHeroTranslations } from '@helpers/translations';
import SearchInput from '@components/search-input/SearchInput';
import { Button } from '@components/button';

function Nav() {
    const { navHome, navRent, navBuy, navSell, navContact } = useHeroTranslations();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={appLogo} alt="app logo" className="w-48 h-auto max-h-12" />
                </div>

                {/* Search Input (Desktop) */}
                <div className="hidden md:flex flex-grow items-center justify-center">
                    <SearchInput />
                </div>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex flex-grow justify-center">
                    <ul className="flex space-x-8">
                        <li>{navHome}</li>
                        <li>{navRent}</li>
                        <li>{navBuy}</li>
                        <li>{navSell}</li>
                    </ul>
                </div>

                {/* Globe Icon and Contact Button (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <img src={globeIcon} alt="globe" className="h-5" />
                        <span>En</span>
                    </div>
                    <Button label={navContact} onClick={() => {}} />
                </div>

                {/* Globe Icon and Menu Toggle Button (Mobile) */}
                <div className="md:hidden flex items-center space-x-2">
                    <div className="flex items-center space-x-2">
                        <img src={globeIcon} alt="globe" className="h-5" />
                        <span>En</span>
                    </div>
                    <button className="text-2xl" onClick={toggleMenu}>
                        &#9776;
                    </button>
                </div>
            </div>

            {/* Mobile Menu Popup */}
            {isMenuOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow-md p-4">
                    <div className="flex items-center justify-between mb-4">
                        <img src={appLogo} alt="app logo" className="w-32 h-auto max-h-12" />
                        <button className="text-2xl" onClick={toggleMenu}>
                            &times;
                        </button>
                    </div>
                    <ul className="flex flex-col space-y-4">
                        <li>{navHome}</li>
                        <li>{navRent}</li>
                        <li>{navBuy}</li>
                        <li>{navSell}</li>
                    </ul>
                    <div className="flex items-center justify-between mt-4">
                        <Button label={navContact} onClick={() => {}} />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Nav;
