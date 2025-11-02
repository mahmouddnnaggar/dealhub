'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';

import sliderItem1 from '@/assets/images/IPhone 14.png';
import sliderItem2 from '@/assets/images/IPhone 17.jpg';

const sliderItems = [
  { id: 1, image: sliderItem1 },
  { id: 2, image: sliderItem2 },
];

export default function MainSlider() {
  const swiperOptions: SwiperOptions = {
    spaceBetween: 20,
    slidesPerView: 1,
  };

  return (
    <Swiper {...swiperOptions}>
      {sliderItems.map(item => (
        <SwiperSlide key={item.id}>
          <div className="slide relative flex justify-between items-center bg-gray-500">
            <div className="text">
              <h2>iPhone Series</h2>
            </div>
            <Image
              src={item.image.src}
              alt="IPhone"
              width={1000}
              height={1000}
              className="size-[300px] object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
