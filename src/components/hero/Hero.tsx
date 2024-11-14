import React, { useEffect, useState } from 'react';
import './style.css';

const textToType = "Hello, I'm Nicholas Camp, a computer science student";

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    const handleButtonClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            // Update displayed text by slicing up to the current index
            setDisplayedText(textToType.slice(0, index + 1));
            index++;

            if (index === textToType.length) {
                clearInterval(intervalId); // Stop interval when text is fully typed
                setIsTyping(false); // Stop cursor blinking after typing is complete
            }
        }, 100);

        return () => clearInterval(intervalId); // Clean up on unmount
    }, []);

    return (
        <div className="px-5 max-w-[1280px] mx-auto min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="font-semibold text-[28px] md:text-[36px] lg:text-[44px] leading-tight text-gray-900 mb-8">
                    {displayedText}
                    {isTyping && <span className="blink">|</span>} {/* Blinking cursor */}
                </h1>

                <p className="my-6 text-base md:text-lg lg:text-xl text-gray-800 mb-8">
                    I'm passionate about technology and excited to explore diverse paths in the industry, solving complex problems and contributing to the field.
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
