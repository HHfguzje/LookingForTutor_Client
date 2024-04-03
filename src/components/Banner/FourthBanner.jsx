import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";

const FourthBanner = ({img}) => {
    return (
        <div className='mt-10'>
            <div className='flex '>
                <div className='mx-2 text-green-900'>
                    <h1 className='font-bold text-4xl'>Dịch vụ tại Gia Sư Việt:</h1>
                </div>
                <div className='ml-16'>
                    <h2 className='font-medium text-xl'>Trung tâm Gia Sư Việt luôn nỗ lực để cung cấp cho bạn dịch vụ gia sư chất lượng nhất, bao gồm:</h2>
                    <br></br>
                    <div class="">
                        <ul class="list-decimal marker:text-blue-500 ml-9 space-y-4">
                            <li class="">
                                <h1 className='font-medium text-lg'>
                                   Các môn phổ thông
                                </h1>
                                <p>
                                    Bao gồm tất cả các môn trong chương trình học phổ thông: gia sư Toán, Vật Lý, Hóa Học, Sinh Học, Gia sư Văn, Lịch Sử, Địa Lý, Tiếng Anh, Gia sư Tiểu Học, và nhiều môn học khác nữa.
                                </p>
                            </li>
                            <li>
                                <h1 className='font-medium text-lg'>
                                Các môn ngoại ngữ
                                </h1>
                                <p>
                                Chủ yếu dành cho những người đã đi làm, bao gồm gia sư dạy giao tiếp các môn: Gia sư Tiếng Anh, Tiếng Nhật, Tiếng Hàn, Tiếng Pháp, Tiếng Trung, Tiếng Tây Ban Nha và các môn ngoại ngữ khác.
                                </p>
                            </li>
                            <li>
                                <h1 className='font-medium text-lg'>
                                Các môn năng khiếu
                                </h1>
                                <p>
                                Chủ yếu liên quan đến các môn nghệ thuật như: Piano, Guitar, Organ, Mỹ Thuật, Thanh Nhạc. Đối với những môn này, để bạn có được gia sư sẽ tốn nhiều thời gian hơn.

                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br></br>
            <hr className='bg-green-600 h-2 rounded-3xl'></hr>
            <br></br>
            <div className='flex '>
                <img src={img} alt='' className='mx-2'/>
                <div className='ml-32'>
                    <h1 className='font-bold text-2xl'>Tạo dựng tương lai cho con</h1>
                    <br></br>
                    <p>
                    Cùng trung tâm gia sư GrowGreen giúp con học giỏi và mang đến cho con một tương lai tốt đẹp. Dù con bạn đang ở mức học lực nào, chúng tôi đều có thể giúp bạn. Hãy liên hệ với bộ phận Quản Lý Đào Tạo để được tư vấn tốt nhất.
                    </p>
                    <div className='mt-16 flex'>
                        <button>
                            <a href="/" className="font-bold bg-green-800 text-2xl px-4 pt-2 pb-2 text-white"> Đăng ký ngay </a>
                        </button>
                        <span className='ml-36 flex'>
                            <FaPhoneAlt className='items-center' />
                           <p className='text-3xl font-bold mr-2'> Gọi tư vấn :</p>
                            <p className='text-green-900 text-3xl font-bold'>0912732627</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthBanner;