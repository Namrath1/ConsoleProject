import React, { useContext, useEffect, useState } from "react";
import consoleContext from "./Context/Context";
import Datepicker from "react-tailwindcss-datepicker";
import { animateLeftToRight, animateToTop } from "./gsap/gsap.js";
function Hero() {
 
  const { value,setValue,issubmitted,setissubmitted } = useContext(consoleContext)
  
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

    const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
    } 
   
    animateLeftToRight(".hero");
  return (
    <div className="hero mx-20 px-32 pt-20 font-HedvigLettersSans bg-black text-white">
      <div className="flex justify-between">
        <div className="flex">
        <img
          src="https://console.zerodha.com/static/images/bar-chart.svg"
          alt=""
        />
        <span className="text-2xl">Report</span>
        </div>
        
        {issubmitted?<button onClick={()=>{setissubmitted((prev)=>!prev)}} className="bg-blue-500 rounded-md px-3 py-2">Go back</button>:<></>}

      </div>

      

      {issubmitted?<p></p>:<form className="flex justify-center w-full space-x-4 py-5" method="submit">
       

       <div className="flex-col flex space-y-2 ">
         <label>Date by Range</label>
         <div className="border-2 rounded-md ">
         <Datepicker 
           
           value={value} 
           onChange={handleValueChange} /> 
         </div>
       </div>

       <div
        
         type="submit"
         onClick={()=>{(setissubmitted((prev)=>!prev))
           console.log(issubmitted);
         }}
         className="w-10 h-10 px-3 py-3 cursor-pointer border-2 rounded-sm bg-blue-600 place-self-end"
       >
         <img className="w-3" src="arrow-right-solid.svg" alt="" />
       </div>
     </form>}

     
    </div>
  );
}

export default Hero;
