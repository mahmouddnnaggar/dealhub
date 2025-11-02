'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import sliderItem1 from '@/assets/images/slider/IPhone 14.png';
import sliderItem2 from '@/assets/images/slider/IPhone 17.jpg';
import appleLogo from '@/assets/images/slider/Apple_gray_logo 1.svg';

import Link from 'next/link';

const sliderItems = [
  { id: 1, image: sliderItem1, bg: 'black' },
  { id: 2, image: sliderItem1, bg: 'black' },
  { id: 3, image: sliderItem1, bg: 'black' },
];

export default function MainSlider() {
  const swiperOptions: SwiperOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
      bulletClass: 'swiper-pagination-bullet bg-red-700!',
    },

    modules: [Autoplay, Pagination],
  };

  return (
    <Swiper {...swiperOptions} className="rounded-lg overflow-hidden bg-black">
      {sliderItems.map(item => (
        <SwiperSlide key={item.id}>
          <div
            className={`p-10 relative flex justify-between items-center bg-iphone-${
              item.bg
            } ${item.bg === 'black' ? 'text-white' : ''}`}
          >
            <div className="text">
              <div className="text-3xl flex items-center">
                <Image
                  src={appleLogo.src}
                  alt="Apple Logo"
                  width={30}
                  height={30}
                />
                <span className="ms-2 mt-2 inline-block">
                  iPhone <span className="text-red-700 font-bold">14</span>{' '}
                  Series
                </span>
              </div>
              <p className="text-6xl font-bold leading-20">
                Up to 10% <br /> off{' '}
                <span className="text-red-700">Voucher</span>
              </p>
              <Link href="/products" className="underline block">
                Shop Now
              </Link>
            </div>
            <Image
              src={item.image.src}
              alt="IPhone"
              width={1000}
              height={1000}
              className="size-[280px] object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
