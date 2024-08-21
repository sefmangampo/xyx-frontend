import React from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderSection } from '@sections/header-section';
import { FooterSection } from '@sections/footer-section';

import './Layout.css';

const Layout: React.FC = () => {
    return (
        <div className="layout-container">
            <HeaderSection />

            <div className="content">
                <Outlet />
            </div>

            <FooterSection />
        </div>
    );
};

export default Layout;
