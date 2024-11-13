import React from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "About",
        link: "/#",
    },
    {
        id: 3,
        name: "Contact",
        link: "/#",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Vegetable",
        link: "/#",
    },
    {
        id: 2,
        name: "Fruits",
        link: "/#",
    },
    {
        id: 3,
        name: "Grains",
        link: "/#",
    },
];

const Navbar = ({ HandlePopup }) => {
    return (
        <div data-aos="fade" className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-2 px-2 sm:px-4">
                
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-20 w-auto mr-2" />
                </div>

                {/* Navigation Links */}
                <ul className="flex items-center gap-8">
                    {NavLinks.map(({ id, name, link }) => (
                        <li key={id}>
                            <a href={link} className="hidden sm:inline-block text-gray-800 hover:text-primary text-xl font-semibold transition-colors">
                                {name}
                            </a>
                        </li>
                    ))}

                    {/* Dropdown Menu */}
                    <li className="hidden md:block relative group cursor-pointer">
                        <div className="flex items-center gap-1 text-gray-800 text-xl font-semibold hover:text-primary transition-colors">
                            Dropdown
                            <MdArrowDropDown className="transition-transform duration-300 group-hover:rotate-180" />
                        </div>

                        {/* Dropdown Content */}
                        <div className="absolute left-0 hidden group-hover:block w-[200px] bg-white text-gray-800 shadow-md mt-2 rounded-md border border-gray-200">
                            <ul>
                                {DropdownLinks.map(({ id, name, link }) => (
                                    <li key={id}>
                                        <a href={link} className="block text-lg p-2 hover:bg-primary/10 rounded-md transition-colors">
                                            {name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>

                    {/* My Account Button */}
                    <li>
                        <button onClick={HandlePopup}  className="flex items-center gap-2 bg-secondary text-white text-xl py-2 px-5 rounded-md transition-transform transform hover:scale-105">
                            <FaUser />
                            My Account
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
