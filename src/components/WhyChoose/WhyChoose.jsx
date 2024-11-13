import React from 'react';
import { FaBus, FaShuttleVan, FaSmile, FaHandsHelping } from "react-icons/fa";

const WhyChoose = () => {
    return (
        <>
            <div className="py-14 md:py-28 bg-gray-50">
                <div className="container">
                    {/* Heading Section */}
                    <h1 data-aos="fade" data-aos-delay="300" className="pb-16 tracking-wider text-2xl font-semibold text-dark text-center">
                        Why Choose Us
                    </h1>

                    {/* Card Section */}
                    <div data-aos="fade">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* 1st Card */}
                            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <FaBus className="text-5xl text-primary" />
                                <p className="text-5xl rotate-90 text-primary text-center transform translate-x-5">....</p>
                                <p className="text-dark/70 font-semibold">Reliable Transportation</p>
                                <p className="text-dark/50">We provide safe, on-time, and reliable transport for all your needs.</p>
                            </div>

                            {/* 2nd Card */}
                            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <p className="text-dark/70 font-semibold">Fast & Efficient Delivery</p>
                                <p className="text-5xl rotate-90 text-secondary text-center transform translate-x-5">....</p>
                                <FaShuttleVan className="text-5xl text-secondary" />
                                <p className="text-dark/50">Our delivery system ensures fast and efficient service to your doorstep.</p>
                            </div>

                            {/* 3rd Card */}
                            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <FaSmile className="text-5xl text-primary" />
                                <p className="text-5xl rotate-90 text-primary text-center transform translate-x-5">....</p>
                                <p className="text-dark/70 font-semibold">Customer Satisfaction</p>
                                <p className="text-dark/50">We prioritize your happiness with our services and support.</p>
                            </div>

                            {/* 4th Card */}
                            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <p className="text-dark/70 font-semibold">Always Here to Help</p>
                                <p className="text-5xl rotate-90 text-secondary text-center transform translate-x-5">....</p>
                                <FaHandsHelping className="text-5xl text-secondary" />
                                <p className="text-dark/50">Our team is ready to assist you with any questions or issues at any time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyChoose;
