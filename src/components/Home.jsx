import bg02 from "../assets/bg02.jpeg"
import bg01 from "../assets/bg02.png"
import bg04 from "../assets/bg04.png"
import Banner from "./Banner/Banner";
import FourthBanner from "./Banner/FourthBanner";
import SecondBanner from "./Banner/SecondBanner";
import ThirdBanner from "./Banner/ThirdBanner";
import ScrollToTopButton from "../action/ScrollToTopButton";

const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28">
            <div>
            <Banner banner={bg01} heading="GIA SƯ VIỆT" subHeading="Mang thành công đến với con bạn"
             description="Bạn muốn con chăm ngoan, học giỏi? Đăng ký ngay! Đội ngũ gia sư giỏi của Gia Sư Việt sẽ giúp con bạn tiến bộ nhanh chóng." 
             btn="Đăng ký ngay!"/>
            <SecondBanner banner={bg02} heading="Bạn là giáo viên, sinh viên?"
                subHeading="Gia nhập vào đội ngũ gia sư của Gia Sư Việt, nhận lớp và có thêm thu nhập từ những kiến thức, kỹ năng giảng dạy của bạn."
                btn="Đến trang dành cho gia sư! " />
            <ThirdBanner btn="Đăng ký thuê gia sư ngay" />
            <FourthBanner img={bg04}/>
            <ScrollToTopButton />
            </div>
        </div>
    );
};

export default Home;