import React from 'react';
import FooterRow from './FooterRow';

const FooterColumn = ({ heading, contents }) => {
    return (
        <div className="md:w-1/2"> 
            <h1 className="font-bold">{heading}</h1>
            <ul className='mt-5'>
                {contents.map((item, index) => (
                    <FooterRow key={index} icon={item.icon} text={item.text} href={item.href} />
                ))}
            </ul>
        </div>
    );
};

export default FooterColumn;