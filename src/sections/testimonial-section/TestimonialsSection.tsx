import React from 'react';
import BinanceIcon from '@assets/brands/binance_logo.svg';
import UserIcon from '@assets/images/user.png';
import RatingsIcon from '@assets/icons/star.svg';

const testimonial =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

function TestimonialSection() {
    return (
        <div className="flex flex-col items-center justify-center lg:p-5 mt-20 mb-20">
            <div className="text-3xl font-bold text-center lg:my-5">Andrew Santellan</div>
            <div className="text-lg text-lightskyblue text-center lg:mb-5">
                Product Manager, Binance
            </div>
            <div className="flex flex-col items-center justify-center gap-4 lg:mb-20 sm:flex-row">
                <div className="h-10 w-10 bg-black">
                    <img src={BinanceIcon} alt="Binance icon" />
                </div>
                <div className="text-gray-500 text-2xl">Binance</div>
            </div>

            <div className="relative z-0 lg:w-full w-[90vw]  sm:w-3/5 flex flex-col items-center justify-center mt-5">
                <div className="absolute z-10 top-10 rounded-md h-20 flex bg-blue-200 lg:w-[55vw]" ></div>
                <div className="absolute z-30 top-5 flex justify-center w-full">
                    <img
                        src={UserIcon}
                        alt="person head image"
                        className="h-24 w-24 rounded-full object-cover"
                    />
                </div>
                <div className="flex z-20 flex-col items-center w-[90vw] lg:w-[60vw] justify-center bg-blue-400 text-white rounded-lg p-8 mt-16">
                    <span className="mt-12 w-4/5 text-lg text-center">{testimonial}</span>
                    <div className="mt-8">
                        <img src={RatingsIcon} alt="5 stars" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;
