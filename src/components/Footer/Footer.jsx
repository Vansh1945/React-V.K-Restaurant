import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className="text-white mt-20">
                <div 
                    data-aos="fade-down" 
                    className="container bg-gradient-to-b from-primary to-primaryDark1 rounded-t-3xl py-8 px-6 mx-auto"
                >
                    {/* Contact Us Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-semibold">Contact Us</h1>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-b-2 border-white pb-6">
                        
                        {/* Address Section */}
                        <div className="text-center space-y-4">
                            <div className="flex justify-center items-center gap-3">
                                <IoLocationSharp className="text-4xl" />
                                <p>
                                    #xx, 1st Main, ABC Nagar<br />
                                    Delhi, India 123456
                                </p>
                            </div>
                        </div>

                        {/* Email Section */}
                        <div className="text-center space-y-4">
                            <div className="flex justify-center items-center gap-3">
                                <MdEmail className="text-4xl" />
                                <p>abc01@gmail.com</p>
                            </div>
                        </div>

                        {/* Phone Number Section */}
                        <div className="text-center space-y-4">
                            <div className="flex justify-center items-center gap-3">
                                <FaPhone className="text-4xl" />
                                <p>0147258369</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links and Copyright */}
                    <div className="flex flex-col md:flex-row justify-between items-center py-4 text-center md:text-left mt-4">
                        <p>© 2024 | All rights reserved</p>
                        <div className="flex items-center gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:underline">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
