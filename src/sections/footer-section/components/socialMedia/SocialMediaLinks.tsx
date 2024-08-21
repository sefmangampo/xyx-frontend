import React from 'react';
import { fbLogo, twitterLogo, linkedInLogo } from '@assets/brands';

function SocialMediaLinks() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-5 text-gray-600 w-11/12 mx-auto">
            <p>&copy; 2022 Brainly.</p>
            <div className="flex space-x-2 mt-2 md:mt-0">
                <a
                    href="#"
                    className="flex justify-center items-center bg-gray-200 h-6 w-6 rounded-full p-1"
                >
                    <img src={fbLogo} alt="fb logo" className="h-full w-full object-contain" />
                </a>
                <a
                    href="#"
                    className="flex justify-center items-center bg-gray-200 h-6 w-6 rounded-full p-1"
                >
                    <img
                        src={twitterLogo}
                        alt="twitter logo"
                        className="h-full w-full object-contain"
                    />
                </a>
                <a
                    href="#"
                    className="flex justify-center items-center bg-gray-200 h-6 w-6 rounded-full p-1"
                >
                    <img
                        src={linkedInLogo}
                        alt="linkedin logo"
                        className="h-full w-full object-contain"
                    />
                </a>
            </div>
        </div>
    );
}

export default SocialMediaLinks;
