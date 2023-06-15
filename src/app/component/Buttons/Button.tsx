import React from 'react'
import Images from '@/app/assets/imgTunnel'
import Image from 'next/image'

export default function Button({text}:any) {
    const { arrow } = Images()
    return (
        <>
            <button className="flex py-3 px-3 text-light font-medium bg-primary rounded-full">
                <span className='me-3'>
                    {text}
                </span>
                <Image src={arrow} alt='' />
            </button></>
    )
}
