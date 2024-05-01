import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar(){
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

 return(
        <nav className="p-10 flex justify-between items-center">
    <h1 className="text-2xl md:text-3xl font-bold underline underline-offset-8 decoration-green-500 -rotate-6 ">akanji  🧑🏽‍💻  </h1>
        
        <div  className="flex items-center gap-3">
                {socials.map((social,index)=>{
                        const icon = social.Icon
                        return <Link className="w-6 h-6 hover:text-xl transition-all" href={social.link} key={index} aria-label={social.label}>
                            {icon}
                            </Link>
                }
        ) }
        </div>
        </nav>
 )
}