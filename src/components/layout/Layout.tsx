import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderSection } from '@sections/header-section';
import { FooterSection } from '@sections/footer-section';

const Layout: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <HeaderSection />
            <div className="mt-24 flex-1 flex items-center justify-center sm:mt-12">
                <Outlet />
            </div>

            <FooterSection />
        </div>
    );
};

export default Layout;
