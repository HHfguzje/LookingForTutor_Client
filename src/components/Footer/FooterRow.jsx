import React from 'react';

const FooterRow = ({ icon, text, href }) => {

    const content = href ? (
        <a href={href} className="hover:text-blue-500">
            {text}
        </a>
    ) : (
        text
    );

    return (
        <li className='mt-2 flex items-center'>
            {icon && <span className="mr-2">{icon}</span>}
            {content}
        </li>
    );
};


export default FooterRow;