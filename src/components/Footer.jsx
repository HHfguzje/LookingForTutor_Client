import React from 'react';
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import FooterColumn from './Footer/FooterColumn';

const Footer = () => {
    const descriptionItems = [
        {
            icon: <CiLocationOn />,
            text: "Cầu Giấy, Hà Nội"
        },
        {
            icon: <CiPhone />,
            text: "099743268732"
        },
        {
            icon: <IoMailOpenOutline />,
            text: "Hoang03.it@gmail.com"
        },
    ];

    const secondDescriptionItems = [
        { text: "Giới thiệu", href: "#gioithieu" },
        { text: "Liên hệ", href: "#lienhe" },
        { text: "Chính sách bảo mật", href: "#chinhsachbaomat" },
        { text: "Đăng ký thuê gia sư", href: "#dangkythuegiasu" },
    ]

    return (
        <footer className="bg-gray-200 text-gray-700 px-4 py-8 text-xl">
            <div className="container mx-auto flex flex-wrap justify-between">
                <FooterColumn heading={"Liên hệ với chúng tôi"} contents={descriptionItems} />
                <FooterColumn heading={"Về chúng tôi"} contents={secondDescriptionItems} />
            </div>
        </footer>
    );
};


export default Footer;