import React from 'react';

const Banner = ({banner, heading, subHeading, description, btn}) => {
    return (
        <div>
            <div className="gradientBg rounded-xl md:p-9 px-5 py-9">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div>
                        <h1 className="md:w-3/5 font-bold text-5xl text-white">{heading}</h1><br></br>
                        <h2 className="font-bold text-2xl text-blue-200">{subHeading}</h2>
                        <br></br>
                        <p className="text-xl">{description}</p>
                        <br></br>
                        <button>
                           <a href="/" className="font-bold bg-orange-500 text-2xl px-4 pt-2 pb-2 text-white"> {btn} </a>
                        </button>
                    </div>
                    <div>
                        <img src={banner} alt="" className="lg:h-[386px]"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;