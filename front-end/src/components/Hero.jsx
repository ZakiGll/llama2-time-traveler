import React from 'react'
import { logo } from "../assets";
import { couch } from "../assets";
function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full px-2 pt-2">
            <img src={logo} alt='logo' className="w-28 object-contain"></img>
            <button type='button' className="black_btn">API KEY</button>
        </nav>

        <div className="flex justify-around items-center w-full px-2 py-[5%] flex-col">
          
          <h1 className="head_text">
          Your Personal
          <span className="orange_gradient"> Time-Traveling </span>
          <br/>Storyteller
          </h1>
          <img src={ couch }  alt="the teller" className="w-[35%] object-cover rounded-lg drop-shadow-2xl shadow-current sm:block hidden"/>
          
        </div>

        
        <p className='desc pt-5'>Immerse yourself in the past as our AI-powered storyteller brings historical events and personalities to life through vivid audio narratives. Whether you're curious about a specific date or eager to uncover the stories of remarkable individuals, ChronoTales is your time-traveling companion.</p>

        
    </header>
  )
}

export default Hero