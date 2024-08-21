import React from 'react';
import Banner from './banner/Banner';
import Nav from './nav/Nav';

const Header: React.FC = () => {
    return (
        <div className="w-full">
            <Banner />
            <Nav />
        </div>
    );
};

export default Header;
