import React from 'react';
import { BiSolidArrowToTop } from "react-icons/bi";

const ScrollToTopButton = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>   
            <button onClick={scrollToTop} className="fixed bottom-20 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <BiSolidArrowToTop />
            </button>
        </div>
    );
};

export default ScrollToTopButton;