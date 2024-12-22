import React from 'react'
import "./Project.css"
function Project() {
  return (
    <div className='flex flex-col  align-center  gap-5 md:flex-row pt-28 pb-16 content-centre items-center justify-evenly  flex-wrap h-full' id='project'>

{/* first div */}

<div id='pro' className=" rounded-full  card-compact bg-base-100 w-96 h-96 shadow-xl ">
  <figure >
    <a href="https://stellar-cranachan-9cbf34.netlify.app/" target='blank'><img className='h-[210px] w-full rounded-t-full'
      src="https://is5-ssl.mzstatic.com/image/thumb/Purple71/v4/f4/0b/cd/f40bcd3b-e5ea-8e99-1b55-9e86b10d72db/mzl.jytiqsix.png/1200x630wa.png"
      alt="Shoes" /></a>
  </figure>
  <div className="card-body text-center md:mx-0" >
    <h2 className="card-title text-white text-3xl mx-auto">Dino Game</h2>
    <p className="pb-2 font-bold text-slate-950">It is the Dino game by using JavaScript</p>
    <div className="card-actions pb-5 mx-auto justify-center">
     
    <a style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}} className="btn border-none text-slate-200 hover:text-slate-950 cursor-pointer"  target='blank' href="https://github.com/Keshavprasath8/Offline-Dino">Github</a>
    <a style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}} className="btn border-none text-slate-200 hover:text-slate-950 cursor-pointer"  target='blank' href="https://stellar-cranachan-9cbf34.netlify.app/">Netlify</a>
    </div>
  </div>
</div>
{/* second div */}
 <div id='pro' className=" rounded-full card-compact bg-base-100 w-96 h-96 shadow-xl ">
  <figure  >
    <a  href="https://relaxed-cascaron-9224cf.netlify.app/" target='blank' ><img className='h-[210px] w-96 rounded-t-full'
      src="https://www.thericestore.com/wp-content/uploads/2021/05/siteicon-2.png"
      alt="Shoes" /></a>
  </figure>
  <div className="card-body text-center">
    <h2 className="card-title text-white text-3xl mx-auto">Rice store</h2>
    <p className="pb-2 font-bold text-slate-950">By using HTML/CSS to created the rice store</p>
    <div className="card-actions pb-5 justify-center">
    <a style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}} className="btn border-none text-slate-200 hover:text-slate-950 cursor-pointer"  target='blank' href="https://github.com/Keshavprasath8/Rice-store">Github</a>
    <a style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}} className="btn border-none text-slate-200 hover:text-slate-950 cursor-pointer"  target='blank' href="https://relaxed-cascaron-9224cf.netlify.app/">Netlify</a>
    </div>
  </div>
</div>
{/* third */}
 <div id='pro' className="bg-base-100 rounded-t-full rounded-b-full card-compact h-96 w-96 shadow-xl">
  <figure >
    <a className='' href="https://tourmaline-profiterole-1d57f9.netlify.app" target='blank'><img className=' h-[210px] w-full rounded-t-full'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5E0uZ_tyG5RLftK-kNv-3K2LUa9W4OLFHg&s"
      alt="Shoes" /></a>
  </figure>
  <div className="card-body text-center">
    <h2 className="card-title text-white text-3xl mx-auto">Portfolio</h2>
    <p className="  font-bold text-slate-950">This site is made by HTML/CSS/javaScript</p>
    <div className="card-actions pb-5 justify-center">
    <a style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}} className="btn border-none text-slate-200 hover:text-slate-950 cursor-pointer"  target='blank' href="https://github.com/Keshavprasath8/Portfolio">Github</a>
    <a style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}} className="btn border-none text-slate-200 hover:text-slate-950 cursor-pointer" target='blank' href="https://tourmaline-profiterole-1d57f9.netlify.app">Netlify</a>
    </div>
  </div>
</div>
{/* Four */}
<div id='pro' className="bg-base-100 rounded-t-full  rounded-b-[5000px] card-compact h-96 w-96 shadow-xl">
  <figure >
    <a className='' href="https://photo-fetching.netlify.app/" target='blank'><img className=' h-[210px] w-full rounded-t-full'
      src="https://img.freepik.com/premium-photo/3d-render-search-engine-tool-with-blank-space_270292-606.jpg"
      alt="Photo" /></a>
  </figure>
  <div className="card-body text-center">
    <h2 className="card-title text-white text-3xl mx-auto">Photo Fetching</h2>
    <p className="pb-2 px-1 font-bold text-slate-950">This site is made by React by using fetch API</p>
    <div className="card-actions pb-5  justify-center">
    <a style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}} className="btn border-none text-slate-200 hover:text-slate-950 cursor-pointer"  target='blank' href="https://github.com/Keshavprasath8/React-PhotoFetch">Github</a>
    <a style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}} className="btn border-none text-slate-200 hover:text-slate-950 cursor-pointer" target='blank' href="https://photo-fetching.netlify.app/">Netlify</a>
    </div>
  </div>

</div>

{/* Five */}
<div id='pro' className="bg-base-100 rounded-t-full rounded-b-[5000px] card-compact h-96 w-96 shadow-xl">
  <figure >
    <a className='' href="https://react-todolist25.netlify.app/" target='blank'><img className=' h-[210px] w-full rounded-t-full'
      src="https://i1.wp.com/timemanagementninja.com/wp-content/uploads/2013/09/Todo-List-board.jpg?fit=600%2C399&ssl=1"
      alt="Shoes" /></a>
  </figure>
  <div className="card-body text-center">
    <h2 className="card-title text-white text-3xl mx-auto">Todo-List</h2>
    <p className="pb-2 font-bold text-slate-950">This site is made by React</p>
    <div className="card-actions pb-5 justify-center">
    <a style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}} className="btn border-none text-slate-200 hover:text-slate-950 cursor-pointer"  target='blank' href="https://github.com/Keshavprasath8/React-Todo">Github</a>
    <a style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}} className="btn border-none text-slate-200 hover:text-slate-950 cursor-pointer" target='blank' href="https://react-todolist25.netlify.app/">Netlify</a>
   
    </div>
  </div>

</div>

{/* six */}
<div id='pro' className="bg-base-100 rounded-t-full rounded-b-[5000px] card-compact h-96 w-96 shadow-xl">
  <figure>
    <a className='' href="https://api-weather2.netlify.app/" target='blank'><img style={{backgroundPosition: "contain"}} className=' h-[210px] w-full rounded-t-full'
      src="https://iconstore.co/assets/img/set/cover/weather-featured-2.png"
      alt="Shoes" /></a>
  </figure>
  <div className="card-body text-center">
    <h2 className="card-title text-white text-3xl mx-auto">Weather</h2>
    <p className="pb-2 px-3 font-bold text-slate-950">This site is made by React by using fetch API</p>
    <div className="card-actions pb-5 justify-center">
    <a style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}} className="btn border-none text-slate-200 hover:text-slate-950 cursor-pointer"  target='blank' href="https://github.com/Keshavprasath8/React-Weather">Github</a>
    <a style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}} className="btn border-none text-slate-200 hover:text-slate-950 cursor-pointer" target='blank' href="https://api-weather2.netlify.app/">Netlify</a>
    </div>
  </div>

</div>
    </div>
  )
}

export default Project ;