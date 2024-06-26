import React from 'react';
import 'tailwindcss/tailwind.css'; // Tailwind CSS
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Icons
import { FaSquareXTwitter } from "react-icons/fa6";
import About from './About';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-fixed bg-center">
      <div className="container mx-auto h-full px-4">
        <div className="mt-20 flex flex-col lg:flex-row items-center justify-center h-full gap-8 lg:gap-80 ">
          <div className="mt-28 text-center" data-aos="fade-up" data-aos-delay="0">
            <h4 className="relative font-serif text-[#b1bde7] ml-10 text-4xl">
              Md Adil
            </h4>
            <h1 className="font-serif text-5xl lg:text-8xl leading-tight text-slate-200">
              FullStack<br />Developer
            </h1>
            <div id="herobtn" className="mt-4">
              <div className="inline-block mx-2 bg-blue-900 text-white p-4 rounded-lg">
                <a className="resume font-sans" id="resume" href="/Deedy_CV.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </div>
              <div className="inline-block mx-2 bg-blue-900 text-white p-4 rounded-lg">
                <a className="resume" id="github" href="https://github.com/eyeaadil" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
            <About/>
          </div>
          <div id="profilediv" className="mt-8  lg:mt-[-15rem] flex flex-col items-center lg:items-start">
            <img
              src="../../profile6.jpg"
              width="300"
              className="img-responsive rounded-full"
              id="profilepic"
              alt=""
              data-aos="fade-right"
              data-aos-delay="0"
            />
            <div className="w-60 flex justify-center mt-8 space-x-6 mx-16">
              <a href="www.linkedin.com/in/md-adil-b4674924b" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-4xl text-slate-200 hover:text-primary"/></a>
              <a href="https://x.com/Eyeaadil" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter  className="text-4xl text-slate-200 hover:text-primary"/></a>
              <a href="https://github.com/eyeaadil" target="_blank" rel="noopener noreferrer"><FaGithub className="text-4xl text-slate-200 hover:text-primary"/></a>
              {/* <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-4xl text-slate-200 hover:text-primary"/></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
