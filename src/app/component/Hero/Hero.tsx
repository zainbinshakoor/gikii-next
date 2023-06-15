import React from 'react'
import Image from 'next/image';
import Images from '../../assets/imgTunnel'
import Button from '../Buttons/Button';
export default function Hero() {
    const { hero, logoOne, logoTwo, logoThree, logoFour, logoFive, logoSix, logoSeven } = Images();
    return (
        <main>
            <div className="grid grid-cols-2 gap-4 p-10">
                <div className="bg-gray-200 p-4 mt-20">
                    <p className='text-primary font-normal text-lg'>The School Operating System</p>
                    <h4 className='text-primary mt-2 text-5xl font-semibold'>Every Data Leads to
                        Measurable Action </h4>
                    <p className='text-primary font-normal text-lg mt-10'>Gone are the days with abundance data but no time for action Its time to take action!</p>
                    <div className='mt-10'>
                        <Button text={'Book a Demo Today'} />
                    </div>
                </div>
                <div className="bg-gray-300 p-4">
                    <Image src={hero} alt='' />
                </div>

            </div>
            <div className="flex justify-center space-x-4">
                <Image src={logoOne} alt="Image 1" className="w-30 h-30" />
                <Image src={logoFour} alt="Image 4" className="w-30 h-30" />
                <Image src={logoSeven} alt="Image 7" className="w-30 h-30" />
                <Image src={logoFive} alt="Image 5" className="w-30 h-30" />
                <Image src={logoTwo} alt="Image 2" className="w-30 h-30" />
                <Image src={logoSix} alt="Image 6" className="w-30 h-30" />
                <Image src={logoThree} alt="Image 3" className="w-30 h-30" />
            </div>

        </main>
    )
}
