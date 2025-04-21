import React, { useState } from 'react'
import { Link } from 'react-router';
import Hamburger from './Hamburger';

const Navlinks = [
  {
    name:"Home",
    href:"/home",
  },
  {
    name:"About",
    href:"/about",
  },
  {
    name:"How it Works",
    href:"/howitworks",
  },
]

function Navbar() {
    
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleNav() {
    setMenuOpen((old) => !old);
  }
  return (
    <div className='' >
        {
        menuOpen && <div className="bg-black/60 z-20 fixed inset-0 " onClick={()=>{
          setMenuOpen(false);
          console.log("Nav close");
        }}></div>
      }
         {/* Navigation Bar */}
      <div className=" z-10 flex justify-between items-center p-6 sticky top-0 left-0" onClick={()=>console.log("NAV CLICK")}>
        <Link to={"/"} className="text-xl md:text-2xl font-bold tracking-wide transition-all duration-500 hover:scale-105 cursor-pointer">
          AI VIDEO GENERATOR
        </Link>
        {/* <button
          className=" text-3xl font-bold focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button> */}
        <div className="items-center justify-center gap-4 hidden md:flex">
          {
            Navlinks.map(link=><Link to={link.href} className='text-lg lg:text-2xl font-medium hover:text-green-600 transition duration-300'>{link.name}</Link>)
          }
        </div>
        <Hamburger toggleNav={toggleNav} navOpen={menuOpen}/>
      </div>
      
      {/* Slide-in Sidebar Menu */}
      <div
        className={`absolute md:hidden inset-y-0 flex-1 left-0 w-72 bg-white text-black z-50 transform transition-all duration-500 ease-in-out origin-left ${
          menuOpen ? "translate-x-0 scale-100 opacity-100" : "-translate-x-full scale-90 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
        </div>

        <nav className="flex flex-col mt-6 space-y-5 px-6 text-lg font-medium">
          {Navlinks.map(link => <Link to={link.href} className="hover:text-green-600 transition duration-300" onClick={()=>setMenuOpen(false)}>{link.name}</Link>)}
          {/* <Link to={"/"} className="hover:text-green-600 transition duration-300">Home</Link>
          <Link to={"/about"} className="hover:text-green-600 transition duration-300">About</Link>
          <Link to={"/howitworks"} className="hover:text-green-600 transition duration-300">How It Works</Link> */}
        </nav>
      </div>
      
    </div>
  )
}

export default Navbar