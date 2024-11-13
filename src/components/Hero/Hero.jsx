import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import Heroimg from '../../assets/hero.png';
import Herobg from '../../assets/herobg.jpg';

const BgStyle = {
    backgroundImage: `url(${Herobg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
};

const Hero = () => {
    return (
        <div style={BgStyle} className="relative z-[-1]">
            <div className="container mx-auto py-16 sm:py-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
                    {/* Text Content Section */}
                    <div className="space-y-7 text-dark order-2 sm:order-1">
                        <h1 data-aos="fade-up" className="text-4xl sm:text-5xl">
                            Fresh & Healthy Meal Plan{" "}
                            <span className="text-secondary font-cursive text-5xl sm:text-7xl"> Delivery</span> in Miami
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="300" className="lg:pr-64 text-base sm:text-lg">
                        Delicious Meals Delivered to Your Doorstep, Starting at Just ₹4,500 per Week!                        </p>
                        {/* Button Section */}
                        <div data-aos="fade-up" data-aos-delay="500" className="flex mt-10 sm:mt-14">
                            <PrimaryButton />
                        </div>
                    </div>

                    {/* Image Section */}
                    <div data-aos="zoom-in" data-aos-delay="500" className="relative z-30 order-1 sm:order-2 flex justify-center">
    <img
        src={Heroimg}
        alt="Healthy meal delivery service"
        className="w-full sm:w-[80%] lg:w-[70%] xl:w-[60%] sm:scale-125 sm:translate-y-16 mx-auto mb-16"
    />
</div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
