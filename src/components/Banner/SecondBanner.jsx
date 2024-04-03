import React from 'react';

const SecondBanner = ({banner, heading, subHeading, btn}) => {
    return (
        <div className='mt-10'>
            <div className="">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div>
                        <img src={banner} alt="" className="lg:h-[386px]"/>
                    </div>
                    <div>
                        <h1 className="font-bold text-primary text-5xl">{heading}</h1><br></br>
                        <p className="text-xl">{subHeading}</p>
                        <br></br>
                        <button>
                           <a href="/" className="font-bold bg-green-600 text-2xl px-4 pt-2 pb-2 text-white">{btn}</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;