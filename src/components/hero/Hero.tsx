import React, { useEffect, useState } from 'react';
import './style.css';

const textToType = "Hello, I am a computer science student and developer";

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');

    const handleButtonClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        let index = 0;
        let timeoutId: NodeJS.Timeout;

        const typeCharacter = () => {
            if (index < textToType.length) {
                setDisplayedText(prev => prev + textToType.charAt(index));
                index++;
                timeoutId = setTimeout(typeCharacter, 100); // Store the timeout ID
            }
        };

        typeCharacter();

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="px-5 max-w-[1280px] mx-auto min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="font-semibold text-[28px] md:text-[36px] lg:text-[44px] leading-tight text-gray-900 mb-8">
                    {displayedText}
                    <span className="blink"></span> {/* Blinking cursor */}
                </h1>

                <p className="my-6 text-base md:text-lg lg:text-xl text-gray-800 mb-8">
                    My aim is to learn and develop my skills as a programmer, designer, and developer.
                </p>

                <button
                    onClick={handleButtonClick}
                    className="font-medium py-3 px-6 rounded border duration-200 border-gray-800 hover:bg-gray-200 text-xl"
                >
                    Contact me!
                </button>
            </div>
        </div>
    );
};

export default Hero;
