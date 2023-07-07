// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import img11 from "../assets/gallery/11.jpg";
import img12 from "../assets/gallery/12.jpg";
import img13 from "../assets/gallery/13.jpg";
import img14 from "../assets/gallery/14.jpg";
import img15 from "../assets/gallery/15.jpg";
import img16 from "../assets/gallery/16.jpg";
import img17 from "../assets/gallery/17.jpg";
import img18 from "../assets/gallery/18.jpg";
import img19 from "../assets/gallery/19.jpg";
import img20 from "../assets/gallery/20.jpg";
import img21 from "../assets/gallery/21.jpg";
import img22 from "../assets/gallery/22.jpg";
import img23 from "../assets/gallery/23.jpg";
import img24 from "../assets/gallery/24.jpg";
import img25 from "../assets/gallery/25.jpg";
import img26 from "../assets/gallery/26.jpg";
import img27 from "../assets/gallery/27.jpg";

const Gallery = () => {
  const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    { id: 8, src: img8 },
    { id: 9, src: img9 },
    { id: 10, src: img10 },
    { id: 11, src: img11 },
    { id: 12, src: img12 },
    { id: 13, src: img13 },
    { id: 14, src: img14 },
    { id: 15, src: img15 },
    { id: 16, src: img16 },
    { id: 17, src: img17 },
    { id: 18, src: img18 },
    { id: 19, src: img19 },
    { id: 20, src: img20 },
    { id: 21, src: img21 },
    { id: 22, src: img22 },
    { id: 23, src: img23 },
    { id: 24, src: img24 },
    { id: 25, src: img25 },
    { id: 26, src: img26 },
    { id: 27, src: img27 },
  ];

  return (
    <div id="gallery" className="container_fluid">
      <div className="mx-auto py-16 pb-0">
        <div className="grid place-items-center pb-10">
          <h2 className="text-4xl  font-semibold uppercase text-clrHeading sm:text-5xl md:text-5xl flex items-center">Gallery</h2>
          <hr className="w-20 h-2 border-none bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mt-2 mb-2" />
          <p className="mt-5 lg:mt-10">Welcome To Our Gallery</p>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.src} className="img_styles_gallery" alt={`Image ${image.id}`} loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
