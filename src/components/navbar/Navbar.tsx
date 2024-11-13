import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false); // Close the menu
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-20 bg-white shadow-md">
            <div className="max-w-[1560px] mx-auto flex items-center justify-between py-5">
                <div className="left flex items-center font-bold text-base mx-4">
                    my_portfolio
                </div>
                <div className="right flex items-center relative">
                    <ul
                        className={`menu flex-col md:flex-row flex fixed md:static ${
                            menuOpen ? 'left-0 right-0 top-0 bottom-0 bg-white z-30' : 'hidden md:flex'
                        } list-none items-center justify-center`}
                    >
                        <li className="text-[32px] my-4 md:my-auto md:text-base mx-4">
                            <a href="#hero" onClick={handleLinkClick}>Home</a>
                        </li>
                        <li className="text-[32px] my-4 md:my-auto md:text-base mx-4">
                            <a href="#about" onClick={handleLinkClick}>About</a>
                        </li>
                        <li className="text-[32px] my-4 md:my-auto md:text-base mx-4">
                            <a href="#projects" onClick={handleLinkClick}>Projects</a>
                        </li>
                        <li className="text-[32px] my-4 md:my-auto md:text-base mx-4">
                            <a href="#skills" onClick={handleLinkClick}>Skills</a>
                        </li>
                        <li className="text-[32px] my-4 md:my-auto md:text-base mx-4">
                            <a href="#contact" onClick={handleLinkClick}>Contact</a>
                        </li>
                    </ul>
                    <button onClick={toggleMenu} className="absolute block md:hidden right-4 text-2xl z-40">
                        {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
