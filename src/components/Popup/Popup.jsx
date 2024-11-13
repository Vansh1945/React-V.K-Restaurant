import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({ showPopup, setShowPopup }) => {
    return (
        <>
            {showPopup && (
                <div>
                    {/* Overlay */}
                    <div className="h-screen w-screen fixed top-0 left-0 bg-black/40 backdrop-blur-sm z-10" />
                    
                    {/* Popup Container */}
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 shadow-lg bg-white rounded-md z-20 w-[300px]">
                        
                        {/* Header Section */}
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-semibold text-gray-800">Login</h1>
                            <IoCloseOutline 
                                className="text-2xl text-gray-600 cursor-pointer hover:text-red-500 duration-200" 
                                onClick={() => setShowPopup(false)} 
                            />
                        </div>
                        
                        {/* Login Form */}
                        <div className="mt-4">
                            <input 
                                type="email" 
                                placeholder="Enter Email" 
                                className="w-full rounded-md border border-gray-300 px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input 
                                type="password" 
                                placeholder="Enter Password" 
                                className="w-full rounded-md border border-gray-300 px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
                            />

                            {/* Login Button */}
                            <button 
                                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primaryDark1 duration-200"
                                onClick={() => setShowPopup(false)}
                            >
                                Login
                            </button>

                            {/* Social Login */}
                            <div className="mt-4">
                                <p className="text-center text-gray-500">or login with</p>
                                <div className="flex justify-center gap-4 mt-3">
                                    <FaFacebook className="text-3xl text-blue-500 cursor-pointer hover:text-blue-600 scale-110 duration-200" />
                                    <FaGoogle className="text-3xl text-red-500 cursor-pointer hover:text-primary scale-110 duration-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
