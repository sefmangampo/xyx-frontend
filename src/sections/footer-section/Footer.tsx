import React from 'react';
import './Footer.css';
import AppLogo from '@assets/icons/xyz.svg';

import './components/footerColumns/FooterColumn';
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
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={AppLogo} alt="XYZ Logo" />
                    <p>{footerText}</p>
                    <form className="footer-subscribe">
                        <input type="email" placeholder={emailAddress} />
                        <button type="submit">{'>'}</button>
                    </form>
                </div>
                <div className="footer-links">
                    <FooterColumn data={menuOptions} />
                    <FooterColumn data={supportOptions} />
                    <FooterColumn data={resourcesOptions} />
                </div>
            </div>
            <SocialMediaLinks />
        </footer>
    );
}

export default Footer;
