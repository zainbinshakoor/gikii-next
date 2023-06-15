import React from 'react';
import Image from 'next/image';
import Images from '../assets/imgTunnel';
import Button from '../component/Buttons/Button';

function Navbar() {
  const { logo } = Images();

  return (
    <header>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="w-13 h-13 mt-1">
              <Image src={logo} alt="Gikii" />
            </div>
            <ul className="ms-10 flex items-center gap-5 hover:cursor-pointer">
              <li className="text-medium text-base">Products</li>
              <li>Case Studies</li>
              <li>Pricing</li>
              <li>About Gikii</li>
            </ul>
          </div>

          <div>
            <Button text={'Book Your Demo'} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
