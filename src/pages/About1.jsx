
import Logo1 from "../assets/profile-removebg-preview.png"
import React from 'react';
import { Link } from "react-router-dom";
import"./About.css"
const About = () => {
  return (
    <section className=" px-11 py-[30px] h-full md: " id="about">
      <div className=" flex flex-col-reverse  mt-14 md:flex-row justify-evenly items-center " id="blur">
        {/* About Data */}
        <div className=" py-5 w-[60%]">
          <h1 className="section__subtitle text-3xl text-indigo-600  font-semibold">
            My <span className="">Intro</span>
          </h1>

          <h2 id="skills" className="section__title  text-4xl font-bold mt-4 mb-4">
            About Me
          </h2>

          <p className="about__description text-lg  text-slate-300 mb-6">
          Hey there! 👋 I'm a passionate Frontend Developer who loves crafting beautiful and functional web experiences. With my skills in HTML, CSS, JavaScript, and React, I bring ideas to life on the web. My clients? They're thrilled with the work I do and the projects I deliver. 😊
          </p>
          <div className="w-[100%]">
          <h1 id="skills" className="section__title text-4xl w-full font-bold mt-4 mb-4">Skills </h1>
            <ol className=" tracking-wide leading-loose text-slate-300   px-7 pb-5">
            <li><span className="text-indigo-500">HTML: </span>Building the web's structure, one tag at a time.</li>
            <li><span className="text-indigo-500">CSS:</span> Turning plain pages into stunning visual delights.</li>
            <li><span className="text-indigo-500">JavaScript:</span> Adding interactivity to make the web dynamic and engaging.</li>
            <li><span className="text-indigo-500">React:</span> Creating responsive and high-performance user interfaces.</li>
            <li><span className="text-indigo-500">Bootstrap:</span> Using this powerful toolkit to design responsive sites quickly.</li>
            <li><span className="text-indigo-500">Tailwind:</span> Leveraging utility-first CSS for fast and efficient styling.</li>

            </ol>
          
          </div>
         <Link  to ="/contact"><button style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}}  className="btn border-none text-lg text-slate-200 mt-3 hover:text-slate-950 cursor-pointer" >Contact Me</button></Link>
        </div>

        {/* About Image */}
        <div className="w-[250px] md:w-[400px]">
          <svg
            className="about__blob w-full h-auto"
            viewBox="0 0 550 592"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="maskBorder" mask-type="alpha">
              <path
                d="M263 48.1782C270.426 43.891 279.574 43.891 287 48.1782L501.157 
                  171.822C508.583 176.109 513.157 184.032 513.157 192.606V439.894C513.157 
                  448.468 508.583 456.391 501.157 460.678L287 584.322C279.574 588.609 
                  270.426 588.609 263 584.322L48.843 460.678C41.4174 456.391 36.843 448.468 36.843 
                  439.894V192.606C36.843 184.032 41.4174 176.109 48.843 171.822L263 48.1782Z"
                fill="black"
              />
            </mask>
            <g mask="url(#maskBorder)">
              <rect
                x="37"
                width="476"
                height="630"
                fill="url(#pattern2)"
              />
              <path
                d="M285 51.6423L499.157 175.286C505.345 178.859 509.157 185.461 509.157 
                  192.606V439.894C509.157 447.039 505.345 453.641 499.157 457.214L285 
                  580.858C278.812 584.43 271.188 584.43 265 580.858L50.843 457.214C44.655 453.641 
                  40.843 447.039 40.843 439.894V192.606C40.843 185.461 44.655 178.859 50.843 
                  175.286L265 51.6423C271.188 48.0697 278.812 48.0696 285 51.6423Z"
                stroke="black"
                strokeWidth="10"
              />
            </g>

            <rect
              x="37"
              width="476"
              height="300"
              fill="url(#pattern3)"
            />

            <defs>
              <pattern
                id="pattern2"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#imageBorder"
                  transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
                />
              </pattern>

              <pattern
                id="pattern3"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#imageBorder"
                  transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"
                />
              </pattern>

              {/* Profile Image */}
              <image
              
                id="imageBorder"
                width="640"
                height="940"
                href={Logo1}
              />
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
