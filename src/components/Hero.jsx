
import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import background from "../components/0.gif";
import { Link } from "react-router-dom";
import "./text.css"

import Text from './Text';
function Hero({ name, title, description, githubLink, linkedinLink, netlifyLink }) {
  return (
    <>
    <div className="home text-white  flex flex-col h-screen  md:flex-row px-6" id='home'>
      <div className=' flex py-20 px-4 flex-col items-center md:flex-row'>
      <div> 
      <div className='py-5 md:w-full flex flex-col '>
        <h3 className="text-5xl  text-slate-200 font-semibold">Hello,<span className=''> I'm  </span></h3>
        <h1 style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)", backgroundClip: "text"}} className="text-4xl font-medium text-"><Text/></h1>
        <p className="text-lg mt-3">{description}</p>
      </div>
      <Link  to ="/contact"><button style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}}  className="btn border-none text-lg text-slate-200 mt-3 hover:text-slate-950 cursor-pointer" >Contact Me</button></Link>
      <div className='flex py-5'>
        <a href={githubLink} target='blank' className='pr-4 text-gray-600 hover:text-indigo-600'><FaGithub size={30}/></a> 
        <a href={linkedinLink} target='blank' className='pr-4 text-gray-600 hover:text-indigo-600'><FaLinkedin size={30} /></a>
        <a href={netlifyLink} target='blank' className='text-gray-600 hover:text-indigo-600'><BiLogoNetlify size={30}/></a>
      </div>
      </div>
      <div  className='w-80 px-5 md:w-full rounded-lg'>
      <img src="https://camo.githubusercontent.com/be1a7d551da9b400ef6ee20154d1f12c2288f331244b9f0ee4f29c8759d956a6/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f39312f36652f38392f39313665383930366262666461353639316230656136386664343262656534322e676966" alt="" />
      </div>

      </div>
      
    </div>
    </>
  )
}

export default Hero;
