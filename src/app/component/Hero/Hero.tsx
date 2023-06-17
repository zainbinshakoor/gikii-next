import React from 'react';
import Image from 'next/image';
import Images from '../../assets/imgTunnel';
import Button from '../Buttons/Button';

export default function Hero() {
  const { hero, logoOne, logoTwo, logoThree, logoFour, logoFive, logoSix, logoSeven,arrow } = Images();

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-10">
        <div className="p-4 md:mt-20">
          <p className="text-primary font-normal text-base md:text-lg">The School Operating System</p>
          <h4 className="text-primary mt-2 text-3xl md:text-5xl font-semibold">Every Data Leads to Measurable Action </h4>
          <p className="text-primary font-normal text-base md:text-lg mt-4 md:mt-10">Gone are the days with abundance data but no time for action. It's time to take action!</p>
          <div className="mt-4 md:mt-10">
            <Button text={'Book a Demo Today'} imageSrc={arrow} />
          </div>
        </div>
        <div className="bg-gray-300 p-4">
          <Image src={hero} alt="" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center space-x-4 p-4 md:p-10">
        <Image src={logoOne} alt="Image 1" className="w-16 md:w-20 h-16 md:h-20" />
        <Image src={logoFour} alt="Image 4" className="w-16 md:w-20 h-16 md:h-20" />
        <Image src={logoSeven} alt="Image 7" className="w-16 md:w-20 h-16 md:h-20" />
        <Image src={logoFive} alt="Image 5" className="w-16 md:w-20 h-16 md:h-20" />
        <Image src={logoTwo} alt="Image 2" className="w-16 md:w-20 h-16 md:h-20" />
        <Image src={logoSix} alt="Image 6" className="w-16 md:w-20 h-16 md:h-20" />
        <Image src={logoThree} alt="Image 3" className="w-16 md:w-20 h-16 md:h-20" />
      </div>
    </main>
  );
}
