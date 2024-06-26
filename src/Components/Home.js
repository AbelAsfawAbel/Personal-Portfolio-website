import React from "react";
import { Link } from "react-scroll";
import { RiArrowRightSLine } from "react-icons/ri";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row">
        <div class="flex flex-col justify-center  h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Im Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have Skill of Designing and Building software. Currently I Love To
            work on Web Application using technologies’ like React Is, Tailwind
            CSS, Bootstrap, figima and adobe Photoshop.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
            bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="hover:rotate-90 duration-300">
                <RiArrowRightSLine size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            className="rounded-2xl mx-auto w-2/3 md:w-full h-fit max-h-96"
            src="../Assets/link.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
