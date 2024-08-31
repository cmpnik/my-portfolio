import './style.css';

const About = () => {
    return (
        <div className="px-5 max-w-[1560px] mx-auto py-10">
            {/* Title Section */}
            <div className="mb-10">
                <div className="flex items-center">
                    <h2 className="font-semibold text-[32px] flex items-center gap-2">
                        <span className="text-[#007BFF]">#</span>about
                    </h2>
                </div>
            </div>
            {/* Description */}
            <div className="text-center">
                <p className="text-lg text-[#333] leading-relaxed text-center max-w-[1200px] mx-auto">
                    Hello! I am a computer science student and a passionate developer. My goal is to continuously learn and grow my skills in programming, design, and development. I have a keen interest in embedded systems and web development, and I love tackling complex problems with creative solutions.
                </p>
            </div>
        </div>
    );
}

export default About;
