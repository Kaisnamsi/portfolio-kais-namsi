import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-30">
        I'm a dynamic full-stack web developer, adept at creating captivating applications. With a skill set encompassing React, Redux, Next.js, Node.js, Express.js, MongoDB, APIs, and REST APIs,
        I'm well-equipped to tackle diverse challenges. My academic background includes a degree in business computing, and I've gained invaluable experience through internships at a bank and phosphate company. Fueled by my passion for innovation,
        I'm dedicated to crafting remarkable digital solutions that leave a lasting impression. Let's collaborate and bring your ideas to life with an extraordinary touch!
        </p>
      </div>
    </div>
  );
};

export default About;