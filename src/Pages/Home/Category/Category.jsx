import SectionIntro from "../../SectionIntro/SectionIntro";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from '../../../../assets/home/slide1.jpg'
import slider2 from '../../../../assets/home/slide2.jpg'
import slider3 from '../../../../assets/home/slide3.jpg'
import slider4 from '../../../../assets/home/slide4.jpg'
import slider5 from '../../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <div className="mx-4 md:mx-24">
            <SectionIntro
            heading={'From 11:00am to 10:00pm'} intro={'ORDER ONLINE'}></SectionIntro>
            <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <h3 className='md:text-4xl text-white uppercase -mt-12 text-center'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="" />
            <h3 className='md:text-4xl text-white uppercase -mt-12 text-center'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider3} alt="" />
            <h3 className='md:text-4xl text-white uppercase -mt-12 text-center'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider4} alt="" />
            <h3 className='md:text-4xl text-white uppercase -mt-12 text-center'>Dessertz</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider5} alt="" />
            <h3 className='md:text-4xl text-white uppercase -mt-12 text-center'>Salads</h3>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Category;