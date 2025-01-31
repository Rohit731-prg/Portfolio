import React from "react";
import ems from "../assets/ems.png";
import cr from "../assets/cr.png";
import weather from "../assets/weather.png";
import movie from "../assets/movie.png";

function Works() {
  const projectDetails = [
    {
      img: ems,
      title: "Employee Management System",
      des: "React, Tailwind",
      link: "https://github.com/Rohit731-prg/EMS",
    },
    {
      img: cr,
      title: "Cocktail Recipe",
      des: "React, Tailwind",
      link: "https://github.com/Rohit731-prg/Cocktail-Recipe",
    },
    {
      img: weather,
      title: "Weather Application",
      des: "React, Tailwind",
      link: "https://github.com/Rohit731-prg/Weather-Application",
    },
    {
      img: movie,
      title: "Movie Explorer",
      des: "React, Css",
      link: "https://github.com/Rohit731-prg/Movie-Explorer",
    },
  ];
  return (
    <div className="w-full h-screen px-10 py-20" id="works">
      <p className="my-20 text-6xl font-semibold">Works</p>

      <div className="grid grid-cols-2 gap-10 px-10 rounded-b-xl">
        {projectDetails.map((project, index) => (
          <div key={index} className="w-full h-full relative">
            <img
              src={project.img}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
            <div
              className={`absolute bottom-0 w-full h-auto p-4 text-white bg-black/30 backdrop-blur-lg border border-white/10 rounded-b-xl`}
            >
              <p className="font-semibold">{project.title}</p>
              <p className="text-sm">{project.des}</p>
              <button
                onClick={() => window.open(project.link)}
                className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md"
              >
                Project Link
              </button>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
}

export default Works;
