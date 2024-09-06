import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import appLogo from '@assets/icons/xyz.svg';
import globeIcon from '@assets/icons/globe.svg';
import curvePointerIcon from '@assets/icons/curve_pointer.svg';
import { useHeroTranslations } from '@helpers/translations';
import SearchInput from '@components/search-input/SearchInput';
import { Button } from '@components/button';
import { useLocation } from 'react-router-dom';

function Nav() {
    const { navHome, navRent, navBuy, navSell, navContact, inquireNow } = useHeroTranslations();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-white w-full">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src={appLogo} alt="app logo" className="w-48 h-auto max-h-12" />
                </Link>

                <div className="hidden md:flex flex-grow items-center justify-center">
                    <SearchInput />
                </div>

                <div className="hidden md:flex flex-grow justify-center">
                    <ul className="flex space-x-8">
                        <li>
                            <Link to="/home">{navHome}</Link>
                        </li>
                        <li>
                            <Link to="/rent">{navRent}</Link>
                        </li>
                        <li>
                            <Link to="/buy">{navBuy}</Link>
                        </li>
                        <li>
                            <Link to="/sell">{navSell}</Link>
                        </li>
                    </ul>
                </div>

                <div className="relative hidden md:flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <img src={globeIcon} alt="globe" className="h-5" />
                        <span>En</span>
                    </div>
                    <Button label={navContact} onClick={() => {}} />
                    {location.pathname === '/' && (
                        <>
                            <img
                                src={curvePointerIcon}
                                alt="globe"
                                className="absolute scale-[2] top-20 right-24  h-5"
                            />
                            <div className=" absolute top-24 right-36 w-full -rotate-[10deg] text-sky-400 ">
                                {inquireNow}
                            </div>
                        </>
                    )}
                </div>

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

            {isMenuOpen && (
                <div className="md:hidden w-full bg-white shadow-md p-4">
                    <ul className="flex flex-col text-center space-y-4">
                        <li>
                            <Link onClick={toggleMenu} to="/home">
                                {navHome}
                            </Link>
                        </li>
                        <li>
                            <Link onClick={toggleMenu} to="/rent">
                                {navRent}
                            </Link>
                        </li>
                        <li>
                            <Link onClick={toggleMenu} to="/buy">
                                {navBuy}
                            </Link>
                        </li>
                        <li>
                            <Link onClick={toggleMenu} to="/sell">
                                {navSell}
                            </Link>
                        </li>
                    </ul>
                    <div className="flex w-full items-center justify-between mt-4">
                        <Button label={navContact} onClick={() => toggleMenu()} />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Nav;
