import { Carousel } from 'flowbite-react';
import React from 'react';

const Banner = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 container mx-auto">
  <Carousel>
    <img
      src="https://i.ibb.co/7tj5kV1/Yellow-Red-Modern-Food-Promotion-Banner-Landscape.jpg"
      alt="..."
    />
    <img
      src="https://i.ibb.co/VQr5C4S/Black-and-White-Food-Beverage-Banner-Landscape.jpg"
      alt="..."
    />
    <img
      src="https://i.ibb.co/6BtFz7B/Black-and-Yellow-Simple-Minimalist-Burger-Promotion-Banner.jpg"
      alt="..."
    />
    <img
      src="https://i.ibb.co/85SRHKT/Orange-Simple-Food-Marketing-Banner.jpg"
      alt="..."
    />
  </Carousel>
</div>
  );
};

export default Banner;