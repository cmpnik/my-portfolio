import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-center space-x-6">
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <i className="devicon-github-original text-3xl hover:text-gray-400"></i>
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <i className="devicon-linkedin-plain text-3xl hover:text-gray-400"></i>
                </a>
                
            </div>
            <div className="text-center mt-4">
                <p>&copy; 2024 Nick Camp. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
