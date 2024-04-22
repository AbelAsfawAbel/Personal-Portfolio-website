import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500
          "
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Welcome to my personal website! I'm Abel Asfaw , a junior front-end
          developer passionate about crafting captivating and user-friendly web
          experiences. With expertise in HTML, CSS, and JavaScript, I combine
          technical skills with a creative mindset to build visually appealing
          and functional websites. I have a keen eye for design aesthetics and a
          deep understanding of user experience principles. My goal is to create
          seamless interactions, intuitive navigation, and visually pleasing
          layouts that engage and delight users. I stay up-to-date with the
          latest trends and technologies in web development, using frameworks
          like React and Vue.js to build dynamic and responsive web
          applications. I'm skilled in Git and enjoy collaborating with
          cross-functional teams.
        </p>
        <br />
        <p className="text-xl">
          Beyond coding, I'm a proactive problem solver and a strong
          communicator. I value feedback and continuously strive to improve my
          skills and deliver the best results. Feel free to explore my portfolio
          to see some of my past projects. If you have any inquiries or would
          like to discuss potential collaborations, please don't hesitate to get
          in touch. Let's create something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
