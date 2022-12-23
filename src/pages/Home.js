import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../conponents/swiper.css"
import bob1 from "../image/bob.mov"
import bob2 from "../image/bob1.mp4"
import agan from "../image/agan.mp4"
import mov1 from "../video/01.mov"
import mov2 from "../video/02.mov"
import mov3 from "../video/03.mov"
import mov4 from "../video/04.mp4"
import mov5 from "../video/05.mp4"
import mov6 from "../video/06.mp4"
import mov7 from "../video/07.mp4"
import mov8 from "../video/08.mp4"
import mov9 from "../video/09.mp4"
import mov10 from "../video/10.mp4"
import ClipLoader from "react-spinners/ClipLoader";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Home() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (

    <>
      <h1>Explore, collect, and Buy Toys</h1>

      {
        loading ?
        <ClipLoader
          color={'#6F2ADD'}
          loading={loading}

          size={80}

        />
        :
        <Swiper
        spaceBetween={100}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5500,
          // disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <video src={mov1} autoPlay muted loop />
        </SwiperSlide>
        <SwiperSlide>
          <video src={mov6} autoPlay muted loop />
        </SwiperSlide>
        <SwiperSlide>
          <video src={mov2} autoPlay muted loop />
        </SwiperSlide>

        <SwiperSlide>
          <video src={mov4} autoPlay muted loop />
        </SwiperSlide>
        <SwiperSlide>
          <video src={mov5} autoPlay muted loop />
        </SwiperSlide>
        <SwiperSlide>
          <video src={mov8} autoPlay muted loop />
        </SwiperSlide>
        <SwiperSlide>
          <video src={mov9} autoPlay muted loop />
        </SwiperSlide>
        <SwiperSlide>
          <video src={mov10} autoPlay muted loop />
        </SwiperSlide>

      </Swiper>
      }
      
    </>
  );
}
