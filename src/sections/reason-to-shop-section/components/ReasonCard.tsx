import React from 'react';

type ReasonCardParams = {
    icon: string;
    title: string;
    details: string;
};

function ReasonCard({ icon, title, details }: ReasonCardParams) {
    return (
        <div className="flex flex-col items-center w-full max-w-[400px] p-5 gap-5 text-white">
            <div className="flex items-start w-full">
                <img src={icon} alt={title} className="h-12 w-12 object-contain " />
            </div>

            <div className="text-2xl font-bold">{title}</div>
            <div className="text-lg leading-6">{details}</div>
        </div>
    );
}

export default ReasonCard;
