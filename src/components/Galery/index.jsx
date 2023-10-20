import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Galery = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      pagination={{clickable: true,}}
      navigation={true}
      autoplay={{ delay: 3000, disableOnInteraction: false, }}
      modules={[Autoplay, Pagination, Navigation]}
      className="h-60 w-full bg-orange-200 select-none overflow-hidden">
      <SwiperSlide>
        <img className="object-fit object-bottom" src="https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/slides%2FImagen%20de%20WhatsApp%202023-10-19%20a%20las%2018.53.01_e8b323c1.jpg?alt=media&token=dbfb4321-3482-479d-b5bf-a807cb03f747" alt="" />
      </SwiperSlide>
      <SwiperSlide className='border'>
        <img className="object-fit" src="https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/slides%2Fparker-burchfield-tvG4WvjgsEY-unsplash.jpg?alt=media&token=64abdeff-e4a6-4730-bfdc-a8fa31eeddd4" alt="" />
      </SwiperSlide>
      <SwiperSlide className='border'>
        <img className="object-fit" src="https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/slides%2FImagen%20de%20WhatsApp%202023-10-19%20a%20las%2019.05.37_6b076eb5.jpg?alt=media&token=048928e0-75c2-4edf-a37a-31b0a9886308" alt="" />
      </SwiperSlide>
      <SwiperSlide className='border'>
        <img className="object-fit sm:-mt-24" src="https://firebasestorage.googleapis.com/v0/b/secondchance-ecommerce.appspot.com/o/slides%2Fcristine-enero-Hh5SE7THZFI-unsplash.jpg?alt=media&token=f5819ce5-f7bb-4d7f-a002-bd84ca9d8365" alt="" />
      </SwiperSlide>
    </Swiper>
  )
}

export default Galery;
