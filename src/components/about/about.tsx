import './about.css';

const About = () => {
    return (
        <div>
           <div className="px-5 max-w-[1560px] mx-auto min-h-screen flex items-center justify-center">
                <div>
                    <h1 className="font-semibold text-[32px] mb-3 text-center">
                        Hello, I am a <span className="text-[#007BFF]">computer science</span> student and developer
                    </h1>
                    <p className="my-6 text-center">My aim is to learn and develop my skills as a programmer, designer, and developer</p>
                    <button className="font-medium py-2 px-4 rounded border duration-200 border-[#007BFF] hover:bg-[#007BFF33]">Contact me!</button>
                </div>
            </div> 
        </div>
    );
}

export default About;
