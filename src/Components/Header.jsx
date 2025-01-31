import React from "react";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { scroller } from "react-scroll";
import CV from './../assets/CV.pdf'

function Header() {
  const imgLink =
    "https://images.unsplash.com/photo-1678875922594-92c3cc35d088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFja2dyb3VuZCUyMGltYWdlJTIwZnJlZXxlbnwwfHwwfHx8MA%3D%3D";
  const nextSection = () => {
    scroller.scrollTo("about", {
      duration: 500,
      smooth: true,
      offset: -50,
    });
  };

  const socialLinks = [
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/abdulrahman.ahmed.399/",
    },
    {
      icon: <FaTwitterSquare />,
      link: "https://twitter.com/AbdulrahmanAhmed",
    },
    {
      icon: <FaInstagramSquare />,
      link: "https://www.instagram.com/abdulrahman_ahmed/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/Rohit731-prg",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/rohit-singha-55477b308/",
    },
    
  ]

  return (
    <div className="w-full sm:h-screen h-auto flex sm:flex-row flex-col">
      <div className="fixed w-3/4 h-auto px-10 py-5 bg-black top-10 left-1/2 transform -translate-x-1/2 text-white flex flex-row justify-between">
        <p>Portfolio</p>
        <div className="flex sm:gap-10 gap-2">
          <Link
            className="cursor-pointer"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="works"
            smooth={true}
            duration={500}
          >
            Works
          </Link>{" "}
          {/* Fixed duplicate About link */}
        </div>
      </div>

      <div
        className="sm:w-1/2 w-full h-full flex flex-col justify-end items-center pb-20"
        id="home"
      >
        <div className="w-3/4 sm:pt-0 pt-40">
          <p className="text-2xl text-orange-400 font-normal mb-5">Hello</p>
          <p className="sm:text-6xl text-2xl sm:font-semibold font-medium">
            I'm Rohit Singha, a web developer based in Somewhere.
          </p>
          <div className="flex flex-row gap-10 mt-20">
            <button className="px-5 py-3 cursor-pointer bg-black text-white border-2 border-black hover:bg-white hover:text-black">
              MORE ABOUT ME
            </button>
            <button className="px-5 py-3 cursor-pointer border-2 border-black text-black hover:bg-black hover:text-white">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${imgLink})` }}
        className="sm:w-1/2 w-full h-full bg-cover bg-center"
      >
        <div className="text-white flex flex-row justify-between h-full items-end">
          <div className="px-5 py-10">
            <button 
            onClick={() => window.open(CV, '_blank')}
            className="px-5 py-3 font-semibold border-2 border-white hover:bg-white hover:text-black">
              GET MY CV
            </button>
          </div>
          <div className="h-full flex flex-col items-center gap-3 text-4xl px-5 pb-10 justify-end">
            {socialLinks.map((link, index) => (
              <button
              onClick={() => window.open(link.link)}
              className="cursor-pointer" 
              key={index}>{link.icon}</button>
            ))}
            <div className="h-40 w-[2px] bg-white"></div>
            <button
              onClick={nextSection}
              className="text-xl cursor-pointer border-2 border-white p-4 mt-10 rounded-full"
            >
              <IoMdArrowDropdownCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
