import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from './banner/Banner';
import Nav from './nav/Nav';

const Header: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const location = useLocation();
    const headerRef = useRef<HTMLDivElement>(null);

    const isSearchPage = location.pathname.includes('/search');

    const handleScroll = useCallback(() => {
        if (isSearchPage) return;
        const currentScrollTop = window.scrollY;

        if (currentScrollTop > lastScrollTop) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    }, [lastScrollTop, isSearchPage]);

    const handleClickOutside = (event: MouseEvent) => {
        if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
            // Close the hamburger menu or perform any other action
            setIsVisible(true);
        }
    };

    useEffect(() => {
        if (!isSearchPage) {
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('click', handleClickOutside);
            return () => {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('click', handleClickOutside);
            };
        }
    }, [handleScroll, isSearchPage]);

    return (
        <div
            ref={headerRef}
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isSearchPage ? 'static transform-none' : ''}`}
        >
            <Banner />
            <Nav />
        </div>
    );
};

export default Header;
