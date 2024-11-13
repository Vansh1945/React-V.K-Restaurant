import React from 'react';
import Apple from "../../assets/apple.png";
import Kiwi from "../../assets/kiwi.png";
import Lemon from "../../assets/lemon.png";
import Tomato from "../../assets/tomato.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
    return (
        <div className="container py-14 relative">
            <div className="relative z-20">
                <h1 
                    data-aos="fade-up" 
                    data-aos-delay="300" 
                    className="py-8 tracking-wider text-2xl font-semibold text-dark text-center"
                >
                    Taste the Healthy Difference
                </h1>

                {/* Content Section */}
                <div className="space-y-10">
                    <div 
                        data-aos="fade-up" 
                        data-aos-delay="500" 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
                    >
                        <div>
                            <p>
                                We know that <span className="text-primary">time</span> is the greatest value in the world. Our healthy meal plan delivery service, Good Food in Miami, is the answer for those
                                who want to eat healthy, saving time for buying food and preparing delicious healthy meals.
                            </p>
                        </div>
                    </div>

                    <div 
                        data-aos="fade-up" 
                        data-aos-delay="500" 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
                    >
                        <div></div>
                        <p>
                            Enjoy fresh, nutritious meals without the hassle. Good Food offers convenience, taste, and health combined, helping you live better every day.
                        </p>
                    </div>

                    {/* Button Section */}
                    <div 
                        data-aos="fade-up" 
                        data-aos-delay="500" 
                        data-aos-offset="0" 
                        className="flex justify-center mt-10 sm:mt-14"
                    >
                        <PrimaryButton />
                    </div>
                </div>

                {/* Background Fruit Images */}
                <div className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
                    <img src={Apple} alt="Apple" className="max-w-[280px]" />
                </div>

                <div 
                    data-aos="fade-left" 
                    className="absolute top-16 -right-16 sm:bottom-0 sm:right-0 opacity-50 sm:opacity-100 transition-opacity duration-700 ease-in-out"
                >
                    <img src={Lemon} alt="Lemon" className="max-w-[280px] opacity-70 sm:opacity-100 sm:transition-opacity sm:duration-1000 sm:ease-in-out" />
                </div>

                <div 
                    data-aos="fade-left" 
                    className="hidden sm:block absolute bottom-0 right-0"
                >
                    <img src={Tomato} alt="Tomato" className="max-w-[280px]" />
                </div>

                <div 
                    data-aos="fade" 
                    className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 opacity-50 sm:opacity-100 transition-opacity duration-700 ease-in-out"
                >
                    <img src={Kiwi} alt="Kiwi" className="max-w-[160px] opacity-70 sm:opacity-100 sm:transition-opacity sm:duration-1000 sm:ease-in-out" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
