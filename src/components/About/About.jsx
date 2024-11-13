import React from 'react';
import Aboutbg from "../../assets/aboutbg.png";
import { FaUser } from "react-icons/fa";

const bgStyle = {
    backgroundImage: `url(${Aboutbg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    minHeight: "80vh", // Adjusts for laptop view
    position: "relative",
};

const About = ({ handlePopup }) => {
    return (
        <>
            <div style={bgStyle}>
                <div data-aos="fade" className="container min-h-[500px] relative z-10">
                    <h1 className="pt-10 sm:pt-20 tracking-wider text-3xl sm:text-4xl font-semibold text-dark text-center">
                        About Our Restaurant
                    </h1>

                    {/* Card section */}
                    <div data-aos="fade" data-aos-delay="300" className="bg-white/80 p-6 sm:p-10 my-8 sm:my-10 max-w-2xl mx-auto rounded-md">
                        <p className="text-center">
                            Welcome to our restaurant, where we believe in delivering unforgettable dining experiences with a focus on fresh ingredients and authentic flavors. Our skilled chefs craft each dish with passion, bringing together the finest ingredients and traditional techniques to provide you with a meal that’s both delicious and nutritious. Join us for a delightful journey of taste and enjoy an ambiance that’s as warm and inviting as our food.
                        </p>
                    </div>

                    {/* Button section */}
                    <div className="pt-6 sm:pt-10 flex justify-center">
                        <button 
                            onClick={handlePopup} 
                            className="flex items-center gap-2 bg-secondary text-lg sm:text-xl h-[40px] text-white px-4 sm:px-5 py-2 rounded hover:scale-105 duration-300"
                        >
                            <FaUser />
                            My Account
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
