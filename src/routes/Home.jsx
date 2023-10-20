import React from 'react'
import { GoStarFill } from "react-icons/go";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Home() {

  const keyPoints = [
    "Easily find Hacktoberfest-eligible projects by language, difficulty, or category.",
    "Clear and concise guidelines for contributors.",
    "Resources and tutorials for newcomers to open source.",
    "Showcase project information, screenshots, and documentation.",
    "Connect with contributors and maintainers.",
    "Monitor your Hacktoberfest contributions and achievements.",
  ];

  return (
    <>
      <div className="mt-20">
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 p-6 md:p-12">
          <div className="flex justify-center flex-col ">
            <h1 className="font-bold text-5xl md:text-6xl">Welcome to Public <span className="text-blue-900">Codebases!</span> 🎉 </h1>
            <p className="text-2xl font-serif pt-8">
              Public Codebases is a open source platform that gathers and displays a wide variety of open-source projects in one place for people to explore and learn.
            </p>
            <div className="mt-4 flex items-center">
              <Link
                to="/Projects"
                className="bg-[#687eff] text-lg text-center px-4 py-3 transition-all duration-200 ease-out font-bold uppercase rounded text-white hover:bg-[#685eff] shadow-md "
              >
                Explore Projects
                <BiRightTopArrowCircle size={30} className="inline-block ml-1" />
              </Link>
            </div>
          </div>
          <img src="/homeImg.png" alt="HomeImg" className="" />
        </div>
      </div>
      <div className="grid justify-center grid-cols-1 md:grid-cols-2 p-6  md:p-12">
        <div className="text-4xl md:text-6xl font-bold flex justify-center items-center">
          <h1 className="text-center">Key <span className="text-blue-900 border-b-4 border-gray-600"> Features</span></h1>
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex flex-col items-start justify-between space-y-2 font-semibold">
            {
              keyPoints.map((text, index) => (
                <li key={index}
                  className="text-lg md:text-xl flex flex-row space-x-2 items-center">
                  <GoStarFill size={30} className=" text-blue-800" />
                  <p>{text}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <img src="/contribute.jpg" alt="Contribute" className="w-5/6 mx-auto" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold">Want to Contribute?</h1>
          <p className="text-xl text-gray-600 mt-4">
            Join our community and contribute to open-source projects. <br />
            Your contributions make a difference!
          </p>
          <a href="https://github.com/Pinaka-Pani-18/Public-Codebases" target='_blank' className="bg-[#687eff] text-lg text-center px-3 py-3 transition-all duration-200 ease-out font-bold rounded text-white hover:bg-[#685eff] shadow-md mt-4">@github</a>
        </div>
      </div>
    </>
  )
}
