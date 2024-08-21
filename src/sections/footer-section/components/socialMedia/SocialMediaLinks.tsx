import React from 'react';
import { fbLogo, twitterLogo, linkedInLogo } from '@assets/brands';

import './SocialMediaLinks.css';

function SocialMediaLinks() {
    return (
        <div className="footer-bottom">
            <p>&copy; 2022 Brainly.</p>
            <div className="footer-social">
                <a href="#">
                    <img src={fbLogo} alt="fb logo" />
                </a>
                <a href="#">
                    <img src={twitterLogo} alt="twiiter logo" />
                </a>
                <a href="#">
                    <img src={linkedInLogo} alt="linked in logo" />
                </a>
            </div>
        </div>
    );
}

export default SocialMediaLinks;
