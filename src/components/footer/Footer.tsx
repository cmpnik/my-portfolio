import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-600 text-white py-3">
            <div className="container mx-auto flex justify-center space-x-6">
                <a 
                    href="https://github.com/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                >
                    <i className="devicon-github-original text-2xl hover:text-gray-400"></i>
                </a>
                <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                >
                    <i className="devicon-linkedin-plain text-2xl hover:text-gray-400"></i>
                </a>
            </div>
            <div className="text-center mt-2">
                <p className="text-sm">&copy; 2024 Nick Camp. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
