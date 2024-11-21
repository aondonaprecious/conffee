/** @format */

import "./App.css";

import { Github, Send, MessageCircle, Phone, Search, Contact,MenuIcon,FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, MailIcon } from "lucide-react";

import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Offer from "./Components/Offer/Offer";
import { useEffect, useRef, useState } from "react";

const  App = () =>  {

 



  // const name = useRef() 
  // useEffect(() => {
  //   name.current.value ='Precious'
  //   name.current.isMarried = false;                                                                 
  //   console.log(name);
    
  // }, [])
  return (
    <>
      <Landing />
      <About />
      <Offer />
      <Footer />

      {/* <form className="m-4" action="/">
        <label>
          userName
          <input ref={name} className="border border-purple-900" type="text" />
        </label>

        <button className="block p-2 rounded-sm outline outline-purple-700">
          Login
        </button>
      </form> */}
    </>
  );
}

export default App;
