"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return (
    <section className="flex flex-col justify-between h-screen m-auto px-[50px] py-[70px] lg:px-[120px] lg:py-[100px]place-items-start">
      <h1 className="my-4 text-3xl lg:text-4xl font-normal">
        Hello!<span className="pl-2 waving-hand">👋</span>
      </h1>
      <h2 className="leading-[2] max-w-4/5 text-lg mt-6 mb-6 lg:text-4xl">
        I'm <span className="font-bold">Abbey Lin</span>, <br/>
        a {" "}
        <TypeAnimation
            sequence={[
              "Software Engineer",
              1000,
              "Data Engineer",
              1000,
              "XXXXXXXXXXXX",
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          /> <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
      <h3 className='my-6 text-xl lg:text-3xl'>
      <span>Contact me </span> <span> ✉️ </span>
      <span className="group relative inline-block cursor-pointer ">
        <a href="mailto:ablin16@hotmail.com" target="_blank">ablin16@hotmail.com</a>
        <span className="absolute left-0 bottom-[-3px] w-0 h-1 border-[#e6a0fa] bg-[#e6a0fa] transition-all duration-500 group-hover:w-full" />
      </span>
      </h3>
        
    </section>
  )
}

export default Intro