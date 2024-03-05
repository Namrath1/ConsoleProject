import React, { useContext, useEffect, useState } from "react";
import consoleContext from "./Context/Context";
import Datepicker from "react-tailwindcss-datepicker";

function Hero() {
 
  const { value,setValue,issubmitted,setissubmitted } = useContext(consoleContext)
  let formattedDate
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

    const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
    } 
   
  return (
    <div className="mx-20 px-32 py-20 font-HedvigLettersSans">
      <div className="flex">
        <img
          src="https://console.zerodha.com/static/images/bar-chart.svg"
          alt=""
        />
        <span className="text-2xl">P&L</span>
      </div>

      <form className="flex justify-between w-full py-5" method="submit">
        <div className="flex-col flex space-y-2">
          <label>Segment</label>
          <select className="w-44 px-3 py-2 border-2 rounded-md text-sm">
            <option value="Equity">Equity</option>
            <option value="Future&Options">Future&Options</option>
            <option value="Currency">Currency</option>
            <option value="Commodity">Commodity</option>
            <option value="Mutual Funds">Mutual Funds</option>
          </select>
        </div>

        <div className="flex-col flex space-y-2">
          <label>P&L</label>
          <select className="w-44 px-3 border-2 text-sm py-2 rounded-md">
            <option value="Equity">Combined</option>
            <option value="Future&Options">Realised P&L</option>
            <option value="Currency">Unrealised P&L</option>
          </select>
        </div>

        <div className="flex-col flex space-y-2  ">
          <label>Symbol</label>
          <input
            className="h-8 border-2 rounded-md px-3 py-4 text-sm"
            type="text"
            placeholder="Ex: INFY,RELIANCE"
          />
        </div>

        <div className="flex-col flex space-y-2">
          <label>Date by Range</label>
          <Datepicker 
           
            
            value={value} 
            onChange={handleValueChange} 
/> 
        </div>

        <div
          type="submit"
          onClick={()=>{(setissubmitted((prev)=>!prev))
          }}
          className="w-10 h-10 px-3 py-3  border-2 rounded-sm bg-blue-600 place-self-end"
        >
          <img className="w-3" src="arrow-right-solid.svg" alt="" />
        </div>
      </form>

     
    </div>
  );
}

export default Hero;
