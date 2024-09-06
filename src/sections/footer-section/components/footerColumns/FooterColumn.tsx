import React from 'react';
import { FooterColumnProps } from '../../Footer';

function FooterColumn({ data }: { data: FooterColumnProps }) {
    const { header, links } = data;

    return (
        <div className="mb-6 lg:mb-0 flex-1">
            <h4 className="mb-4 text-center lg:text-start   font-bold text-xl text-gray-800">{header}</h4>
            <ul className="list-none p-0 flex justify-center items-center gap-4 flex-wrap text-start lg:text-left lg:flex-col ">
                {links.map(({ id, label, url }) => (
                    <li key={id} className="mb-2 text-sm lg:w-full  lg:text-base">
                        <a href={url} className="text-gray-600 hover:underline">
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterColumn;
