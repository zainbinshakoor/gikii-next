import React, { ReactNode } from 'react';
import Image from 'next/image';

interface ButtonProps {
    text: string;
    imageSrc: string;
}

const Button: React.FC<ButtonProps> = ({ text, imageSrc }) => {
    return (
        <button className="flex py-3 px-3 text-light font-medium bg-primary rounded-full">
            <span className="me-3">{text}</span>
            <Image src={imageSrc} alt="" />
        </button>
    );
};

export default Button;
