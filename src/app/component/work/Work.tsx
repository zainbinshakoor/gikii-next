import React, { FC } from "react";
import Images from "@/app/assets/imgTunnel";
import Image from "next/image";
import Button from "../Buttons/Button";

interface IProps { }

const Work: FC<IProps> = (props) => {
    const { imgW, imgWS } = Images();
    return (
        <>
            <div className="flex flex-col md:flex-row mt-10">
                <div className="w-full md:w-1/2 flex flex-col justify-center p-10">
                    <h1 className="text-primary text-2xl font-semibold text-center md:text-start">
                        More Time for What Matters
                    </h1>
                    <p className="text-primary font-normal text-lg text-center md:text-start">
                        Gone are the days with abundance data but no time for action. It's
                        time to take action! Gone are the days with abundance data but no
                        time for
                    </p>
                    <div className="mt-5">
                        <Button text={"See How It Works"} imageSrc={""} />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center mt-10">
                    <Image src={imgW} alt="" />
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row mt-10">
                <div className="w-full md:w-1/2 flex justify-center items-center mt-10">
                    <Image src={imgWS} alt="" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center p-10">
                    <h1 className="text-primary text-2xl font-semibold text-center md:text-start">
                        Manage work, Not Paper
                    </h1>
                    <p className="text-primary font-normal text-lg text-center md:text-start">
                        Gone are the days with abundance data but no time for action. It's
                        time to take action! Gone are the days with abundance data but no
                        time for
                    </p>
                    <div className="mt-5">
                        <Button text={"See How It Works"} imageSrc={""} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;
