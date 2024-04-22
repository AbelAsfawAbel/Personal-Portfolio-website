import React from "react";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: "../Assets/flower.png",
    },
    {
      id: 2,
      src: "../Assets/app2.png",
    },
    {
      id: 3,
      src: "../Assets/app1.png",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg flex flex-col"
            >
              <img
                src={src}
                alt="image"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center mt-4">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
