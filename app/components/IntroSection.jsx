"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return (
    <section className="flex flex-col justify-between h-screen m-auto px-[50px] py-[70px] lg:px-[120px] lg:py-[100px]place-items-start">
      <h1 className=" my-4 text-3xl lg:text-4xl font-normal">
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
      <div className='my-6'>
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 hover:cursor-pointer text-black">Hire Me</button>
        <button className="px-5 py-2 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 hover:cursor-pointer text-white border border-white mt-3">Download CV</button>
      </div>
    </section>
  )
}

export default Intro