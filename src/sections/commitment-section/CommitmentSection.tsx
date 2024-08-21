import React from 'react';
import { useHeroTranslations } from '@helpers/translations';
import commitmentImage from '@assets/images/commitment.png';

import './CommitmentSection.css';
import { Button } from '@components/button';

function CommmitmentSection() {
    const { commitmentTitle, commitmentDetails, commitmentCTA } = useHeroTranslations();

    const handler = () => {};

    return (
        <div className="commitment-container">
            <div className="left-segment">
                <div className="img-container">
                    <img src={commitmentImage} alt="hero icon, people on the macbook" />
                </div>
            </div>

            <div className="right-segment">
                <div className="commit-title">{commitmentTitle}</div>
                <div className="details">{commitmentDetails}</div>
                <div className="cta">
                    <Button width="150px" label={commitmentCTA} onClick={handler} />
                </div>
            </div>
        </div>
    );
}

export default CommmitmentSection;
