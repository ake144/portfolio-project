import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

    const socials = [
        {
            link:'https://www.linkedin.com/in/akeja/',
            label:"Linkedin",
            Icon: <FaLinkedin />
        },
        {
            link:'https://github.com/ake144/',
            label:"Github",
            Icon:  <FaGithub /> 
        },
        {
        link:'https://twitter.com/AkeTamirat94397',
        label:"Twitter",
        Icon: <FaXTwitter />
    
        }
     ]

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent black:text-white">
      <div className="container p-12 flex justify-between">
        <span>Akanji</span>
        <div  className="flex items-center gap-3">
                {socials.map((social,index)=>{
                        const icon = social.Icon
                        return <Link className="w-6 h-6 hover:text-2xl text-xl transition-all" href={social.link} key={index} aria-label={social.label}>
                            {icon}
                            </Link>
                }
        ) }
        </div>

        <p className="text-white">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
