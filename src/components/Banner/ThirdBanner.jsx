import React from 'react';
import { AiFillSignal, AiFillLike } from "react-icons/ai";
import { GiTreeGrowth } from "react-icons/gi";

const ThirdBanner = ({btn}) => {
    return (
        <div className='mt-10'>
            <div className="gradientBgOpposite rounded-2xl md:p-9 px-5 py-9">
              <div className="flex justify-center items-center">
                <div className="flex-1 m-2">
                    <AiFillSignal className="h-[100px] w-[100px] lg:h-[100px] lg:w-[100px] mx-36" />
                    <br />
                    <h1 className="font-bold text-3xl mx-16 ">Dạy hiệu quả</h1>
                    <br />
                    <p>Con chỉ có thể học tốt nếu yêu thích việc học. Gia sư tại GrowGreen luôn biết cách tạo động lực cho con, bằng các phương pháp giảng dạy thú vị, dễ hiểu và hiệu quả.</p>
                </div>
                <div className="flex-1 m-2">
                    <GiTreeGrowth className="h-[100px] w-[100px] lg:h-[100px] lg:w-[100px] mx-36" />
                    <br />
                    <h1 className="font-bold text-3xl mx-16">Tiến bộ nhanh</h1>
                    <br />
                    <p>Với gia sư giỏi tại GrowGreen, con bạn sẽ nhanh chóng học tập tiến bộ, có kết quả khác biệt chỉ sau 10 buổi học: Con chăm ngoan, học tốt hơn, điểm số cao hơn.</p>
                </div>
                <div className="flex-1 m-2">
                    <AiFillLike className="h-[100px] w-[100px] lg:h-[100px] lg:w-[100px] mx-36" />
                    <br />
                    <h1 className="font-bold text-3xl mx-16">Học thử 2 buổi</h1>
                    <br />
                    <p>Sau 2 buổi học thử đầu tiên, nếu không hài lòng về gia sư, bạn không cần phải thanh toán học phí. Tất nhiên, GrowGreen luôn có những gia sư khiến bạn hài lòng nhất.</p>
                </div>
                </div>
                <br></br>
                <div className="flex justify-center mt-4"> {/*Thêm mt-4 cho margin-top*/}
                    <button className="mx-auto">
                        <a href="/" className="font-bold bg-blue-800 text-2xl px-4 pt-2 pb-2 text-green-400 ">
                            {btn}
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThirdBanner;