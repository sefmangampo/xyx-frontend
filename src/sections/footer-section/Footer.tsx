import React from 'react';
import AppLogo from '@assets/icons/xyz.svg';
import FooterColumn from './components/footerColumns/FooterColumn';
import SocialMediaLinks from './components/socialMedia/SocialMediaLinks';
import useFooterOptions from './useFooterOptions';

type LinkProps = {
    id: number;
    label: string;
    url: string;
};

export type FooterColumnProps = {
    header: string;
    links: LinkProps[];
};

function Footer() {
    const { menuOptions, supportOptions, resourcesOptions, footerText, emailAddress } =
        useFooterOptions();

    return (
        <footer className="bg-gray-100 flex flex-col w-full font-sans">
            <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center w-full lg:w-4/5 mx-auto my-5 px-4 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between w-full mb-6 lg:mb-0">
                    <div className="flex flex-col items-center lg:items-start lg:w-1/4 mb-6 lg:mb-0">
                        <img
                            src={AppLogo}
                            alt="XYZ Logo"
                            className="w-24 h-24 max-w-xs mb-5 md:w-32 md:h-32"
                        />
                        <p className="text-gray-600 max-w-xs text-center lg:text-left">
                            {footerText}
                        </p>
                        <form className="flex flex-col md:flex-row mt-5 w-full max-w-xs">
                            <input
                                type="email"
                                placeholder={emailAddress}
                                className="p-2 border border-gray-300 rounded-l-md w-full md:w-3/4 mb-2 md:mb-0"
                            />
                            <button
                                type="submit"
                                className="p-2 bg-blue-500 text-white border-none rounded-r-md cursor-pointer w-full md:w-auto"
                            >
                                {'>'}
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:w-3/4 gap-8 lg:gap-12">
                        <FooterColumn data={menuOptions} />
                        <FooterColumn data={supportOptions} />
                        <FooterColumn data={resourcesOptions} />
                    </div>
                </div>
            </div>
            <SocialMediaLinks />
        </footer>
    );
}

export default Footer;
