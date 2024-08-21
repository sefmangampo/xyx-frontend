import React from 'react';
import { FooterColumnProps } from '../../Footer';
import './FooterColumn.css';

function FooterColumn({ data }: { data: FooterColumnProps }) {
    const { header, links } = data;

    return (
        <div className="footer-column">
            <h4>{header}</h4>
            <ul>
                {links.map(({ id, label, url }) => {
                    return (
                        <li key={id}>
                            <a href={url}> {label}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FooterColumn;
