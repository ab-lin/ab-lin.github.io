import React from "react";

import {
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: "https://github.com/ab-lin",
  },
  {
    id: 2,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/abbey-c-lin/",
  }
];

const Footer = () => {
  return (
    <footer className="text-white  m-auto container flex content-center justify-between p-12">
      <div className="content-center">
        <span className="text-sm md:text-lg">Made with 💛 by Abbey Lin</span>
      </div>
      <div>
        <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-white hover:text-[#FFCE1B] cursor-pointer p-4 duration-300"
              > 
                <i className="text-xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul> 
      </div>
    </footer>
  );
};

export default Footer;