import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderSection } from '@sections/header-section';
import { FooterSection } from '@sections/footer-section';

const Layout: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <HeaderSection />
            <div className=" flex-1 flex items-center justify-center ">
                <Outlet />
            </div>

            <FooterSection />
        </div>
    );
};

export default Layout;
