import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from './banner/Banner';
import Nav from './nav/Nav';
import './Header.css';

const Header: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const location = useLocation(); // Get the current route

    // Determine if we are on the search page
    const isSearchPage = location.pathname.includes('/search');

    const handleScroll = useCallback(() => {
        if (isSearchPage) return; // Do nothing if on search page

        const currentScrollTop = window.scrollY;

        if (currentScrollTop > lastScrollTop) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    }, [lastScrollTop, isSearchPage]);

    useEffect(() => {
        if (!isSearchPage) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll, isSearchPage]);

    return (
        <div
            className={`header-container ${isVisible ? 'visible' : 'hidden'} ${isSearchPage ? 'search-page' : ''}`}
        >
            <Banner />
            <Nav />
        </div>
    );
};

export default Header;
