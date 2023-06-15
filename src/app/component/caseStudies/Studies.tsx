import React from 'react';
import Images from '@/app/assets/imgTunnel';
import Image from 'next/image';
import FAQs from '../faqs/Faqs';

const Studies: React.FC = () => {
  const { flow } = Images();

  return (
    <main className="bg-secondary mt-10 p-10">
      <h1 className="text-primary mt-2 text-5xl font-semibold text-center">
        Every School Process. In One <br className="sm:hidden" /> Place.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-10">
        <div className="bg-gray-200 mt-10 flex justify-center items-center">
          <Image src={flow} alt="" />
        </div>
        <div className="bg-gray-300 p-4">
          <FAQs />
        </div>
      </div>
    </main>
  );
};

export default Studies;
