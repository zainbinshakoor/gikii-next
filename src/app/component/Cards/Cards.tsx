import React, { FC } from "react";

interface IProps { }

const Card: FC<IProps> = (props) => {
    return (
        <div className="bg-[#F2C94C]">
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row gap-4 bg-gray-300 p-4">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-primary text-2xl font-semibold text-center md:text-start">
                            <span className="line-clamp-3">
                                We Create <br /> value with  <br />process
                            </span>
                        </h1>
                        <div className="bg-[#072736] p-4 rounded-lg shadow-md max-w-xs">
                            <h2 className="text-xl font-semibold text-light break-words">
                                We were able to consolidate all info in one place and reduce the
                                monitoring time
                            </h2>
                            <p className="text-light overflow-hidden overflow-ellipsis mt-5">
                                It allowed them to build a very detailed understanding of our -
                                sometimes a bit complex - product. Essentially having a competent
                                full-time designer on your team was very valuable to us.
                            </p>
                        </div>
                        <div className="bg-light p-4 rounded-lg shadow-md max-w-xs mt-5">
                            <h2 className="text-xl font-semibold text-primary break-words">
                                We were able to consolidate all info in one place and reduce the
                                monitoring time
                            </h2>
                            <p className="text-primary overflow-hidden overflow-ellipsis mt-5">
                                It allowed them to build a very detailed understanding of our -
                                sometimes a bit complex - product. Essentially having a competent
                                full-time designer on your team was very valuable to us.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-light p-4 rounded-lg shadow-md max-w-xs">
                            <h2 className="text-xl font-semibold text-primary break-words">
                                We were able to consolidate all info in one place and reduce the
                                monitoring time
                            </h2>
                            <p className="text-primary overflow-hidden overflow-ellipsis mt-5">
                                It allowed them to build a very detailed understanding of our -
                                sometimes a bit complex - product. Essentially having a competent
                                full-time designer on your team was very valuable to us.
                            </p>
                        </div>

                        <div className="bg-[#AEE9D1] p-4 rounded-lg shadow-md max-w-xs mt-5">
                            <h2 className="text-xl font-semibold text-primary break-words">
                                We were able to consolidate all info in one place and reduce the
                                monitoring time
                            </h2>
                            <p className="text-primary overflow-hidden overflow-ellipsis mt-5">
                                It allowed them to build a very detailed understanding of our -
                                sometimes a bit complex - product. Essentially having a competent
                                full-time designer on your team was very valuable to us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
