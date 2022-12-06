import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SwiperHome = () =>{
    const pubs = [
        {title : "Pizza Régulière",
        desc:"Le lorem ipsum est, en imprimerie.",
        url:"./images/pub1.jpg"},
        {title : "Pizza Régulière",
        desc:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
        url:"./images/pub2.jpg"},
        {title : "Pizza Viande fumée",
        desc:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
        url:"./images/pub3.jpg"},
        {title : "Pizza Viande fumée",
        desc:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
        url:"./images/pub4.jpg"},
    ]
    return (
        <>
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {pubs.map((pub) => { 
                return(  
                  <SwiperSlide className="swiper-slide">
                      <img src={pub.url} alt="" />
                      <h3>{pub.title}</h3>
                      <p>{pub.desc} </p>
                </SwiperSlide>
                )
            })}
          </Swiper>
        </>
      );
}
export default SwiperHome;