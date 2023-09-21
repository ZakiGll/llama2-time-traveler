import { useEffect, useState } from "react"
import {book, loader} from "../assets";
import axios from "axios";

import audio from "../assets/audio.mp3";


function Demo() {
  
  const [inputData, setInputData] = useState([]);
  const [responseData, setResponseData] = useState(" ");

  const [isInputSubmitted, setIsInputSubmitted] = useState(false);



  const Submit = (e) => {
    setIsInputSubmitted(true)
    setResponseData(null)
    e.preventDefault();
    axios.post("http://127.0.0.1:5000/story",{inputData}).then(
      (response) => {
        setResponseData(response.data)
        console.log(response.data.message);      
      }
    )
  }

  function play(){
    new Audio(audio).play()
  }
  

  
  return (
    <section className="mt-14 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form onSubmit={Submit} className="relative flex justify-center items-center mb-16">
          <img 
            src= {book} alt="subject" className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
                type="text"
                placeholder="Enter the date, the personality or the event"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                required
                className="url_input peer"
            />

          <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
          >
            <p>↵</p>
          </button>

        </form>
        {isInputSubmitted &&(
          <div className='mb-10 max-w-full flex justify-center items-center'>
                    {responseData === null ? (
                      <img src={loader} alt='loader' className='w-20 h-20 object-contain ' />
                    ) : (
                        <div className='summary_box'>
                          <p className='font-inter font-medium text-sm text-gray-700'>{responseData.message}</p>
                          <div className="pt-1 flex justify-end">
                            <button type='button' className="black_btn " onClick={play}>Play</button>
                          </div>
                          
                        </div>
                    )}
                  </div>
        )

        }
        
      </div>
    </section>
  )
}

export default Demo