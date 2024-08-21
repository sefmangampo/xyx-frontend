import React from 'react';
import './ReasonCard.css';

type ReasonCardParams = {
    icon: string;
    title: string;
    details: string;
};

function ReasonCard({ icon, title, details }: ReasonCardParams) {
    return (
        <div className="reason-card-container">
            <img src={icon} alt={title} />
            <div className="card-title">{title}</div>
            <div className="card-details">{details}</div>
        </div>
    );
}

export default ReasonCard;
