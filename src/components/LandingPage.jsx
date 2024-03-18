import React, { useState } from "react";
import { animateLeftToRight, animateToTop } from "./gsap/gsap.js";
import Navbar from "./Navbar.jsx";
import axios from "axios";

function LandingPage() {
  animateLeftToRight(".contact");
  animateToTop(".form");

  
  // const date = new Date();
  // const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  // const TodaysDate = date.toLocaleDateString(undefined, options);
  // const dateArray = TodaysDate.split('/');
  // const newdate = (`${dateArray[1]}-${dateArray[0]}-${dateArray[2]}`)

  const [trade, settrade] = useState(false);
  const [ScripName, setScripName] = useState("");
  const [Quantity, setQuantity] = useState(0);
  const [Profit, setProfit] = useState(0);
  const [BuyingPrice, setBuyingPrice] = useState(0);
  const [SellingPrice, setSellingPrice] = useState(0);
  const [dateentered, setdate] = useState("");
  const [check, setcheck] = useState(false);
  const [visible, setvisible] = useState("none");


  function select() {
    var x = document.getElementById("didyoutrade").value;
    if (x === "yes") {
      settrade(true);
      console.log(trade);
    } else settrade(false);
  }



    async function Submitform() {
     
     await axios.post("http://localhost:3000/newentry", {
       Symbol: ScripName,
       Date: dateentered,
       Profit: Profit,
       Quantity:Quantity,
       BuyingPrice:BuyingPrice,
       SellingPrice:SellingPrice, 
      }).then((resp)=>{
        if (resp.data.message.Date) {
          setcheck(true);
          setTimeout(function() {
            setcheck(false)
          }, 3000);
        }
        
        console.log(resp);
      });
      
        setvisible("block")
        setTimeout(function() {
          setvisible("none")
        }, 2000);
      
    }
  return (
    <div className="bg-black min-h-screen ">
      <Navbar />
      <div style={check?{display:visible,borderColor:"blue"}:{display:visible,borderColor:"red"}} id="notify" className="fixed z-10 right-0  top-20 text-white pl-10 pr-36 border-l-4  py-3 bg-[#171717]">
                {check?<p>Submitted Successfully</p>:<p>Document already exists</p>}
      </div>
      <div className="px-32 py-14">
        <div className="contact flex justify-center py-10 ">
          <h1 className="text-6xl text-white font-SpaceGrotesk font-bold  ">
            Welcome to Trader.
          </h1>
          <span className="italic text-blue-600 text-6xl font-bold font-SpaceGrotesk ">
            console
          </span>
        </div>
        <p className="contact px-20 font-SpaceGrotesk text-[#898989]">
          Traderconsole is your comprehensive platform for seamless trade
          management and analysis. Designed with traders in mind, our
          user-friendly interface allows you to effortlessly enter and organize
          details of every trade. Gain valuable insights into your trading
          performance with a detailed overview of your data throughout the year.
        </p>

        <div className="form flex flex-col py-16 space-y-7 px-20">
          <div className="flex text-white sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center">
            <div className="space-y-1 sm:w-1/2 w-full">
              <h2 className="font-semibold">Did you trade Today?</h2>
              <p className="opacity-50 font-medium text-xs ">REQUIRED</p>
            </div>

            <div className="sm:w-1/2 w-full">
              <select
                onChange={select}
                name="trade"
                id="didyoutrade"
                className="bg-[#171717] rounded-full  px-4 py-2 outline-none"
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          {trade ? (
            <div className="space-y-7">

             

              <div className="flex text-white sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center">
                <div className="space-y-1 sm:w-1/2 w-full">
                  <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 font-SpaceGrotesk text-xs ">
                    1
                  </p>
                  <h2 className="font-semibold">Date</h2>
                  <p className="opacity-50 font-medium text-xs ">Enter the date</p>
                  <p className="opacity-50 font-medium text-xs ">REQUIRED</p>
                </div>

                <div className="sm:w-1/2 w-full">
                  <input
                    onChange={(e) => {
                      setdate(e.target.value);
                    }}
                    
                    type="text"
                    className="w-full bg-[#171717] rounded-full  px-4 py-2 outline-none hover:bg-[##2B2B2B]"
                    placeholder="DD-MM-YYYY"
                  />
                </div>
              </div>
            
              
              <div className="flex text-white sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center">
                <div className="space-y-1 sm:w-1/2 w-full">
                  <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 font-SpaceGrotesk text-xs ">
                    2
                  </p>
                  <h2 className="font-semibold">What's your Script Name?</h2>
                  <p className="opacity-50 font-medium text-xs ">REQUIRED</p>
                </div>

                <div className="sm:w-1/2 w-full">
                  <input
                    onChange={(e) => {
                      setScripName(e.target.value);
                    }}
                    type="text"
                    className="w-full bg-[#171717] rounded-full  px-4 py-2 outline-none hover:bg-[##2B2B2B]"
                    placeholder="BANKNIFTY 46400CE, INFY"
                  />
                </div>
              </div>
              <div className="flex text-white sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center">
                <div className="space-y-1 sm:w-1/2 w-full">
                  <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 font-SpaceGrotesk text-xs ">
                    3
                  </p>
                  <h2 className="font-semibold">
                    What's the Quantity of the trade?
                  </h2>
                  <p className="opacity-50 font-medium text-xs ">REQUIRED</p>
                </div>

                <div className="sm:w-1/2 w-full">
                  <input
                    onChange={(e) => setQuantity(e.target.value)}
                    type="text"
                    className="w-full bg-[#171717] rounded-full  px-4 py-2 outline-none hover:bg-[##2B2B2B]"
                    placeholder="Type your Quantity"
                  />
                </div>
              </div>

              <div className="flex text-white sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center">
                <div className="space-y-1 sm:w-1/2 w-full">
                  <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 font-SpaceGrotesk text-xs ">
                    4
                  </p>
                  <h2 className="font-semibold">
                    What's the Profit of the day?
                  </h2>
                  <p className="opacity-50 font-medium text-xs ">REQUIRED</p>
                </div>

                <div className="sm:w-1/2 w-full">
                  <input
                    onChange={(e) => setProfit(e.target.value)}
                    type="text"
                    className="w-full bg-[#171717] rounded-full  px-4 py-2 outline-none hover:bg-[##2B2B2B]"
                    placeholder="Type your Profit"
                  />
                </div>
              </div>

              <div className="flex text-white sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center">
                <div className="space-y-1 sm:w-1/2 w-full">
                  <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 font-SpaceGrotesk text-xs ">
                    5
                  </p>
                  <h2 className="font-semibold">What was your buying Price?</h2>
                  <p className="opacity-50 font-medium text-xs ">OPTIONAL</p>
                </div>

                <div className="sm:w-1/2 w-full">
                  <input
                    onChange={(e) => {setBuyingPrice(e.target.value)
                    console.log(BuyingPrice);}}
                    type="text"
                    className="w-full bg-[#171717] rounded-full  px-4 py-2 outline-none hover:bg-[##2B2B2B]"
                    placeholder="Type your Price"
                  />
                </div>
              </div>

              <div className="flex text-white sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center">
                <div className="space-y-1 sm:w-1/2 w-full">
                  <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 font-SpaceGrotesk text-xs ">
                    5
                  </p>
                  <h2 className="font-semibold">
                    What was your Selling Price?
                  </h2>
                  <p className="opacity-50 font-medium text-xs ">OPTIONAL</p>
                </div>

                <div className="sm:w-1/2 w-full">
                  <input
                    onChange={(e) => {setSellingPrice(e.target.value)}}
                    type="text"
                    className="w-full bg-[#171717] rounded-full  px-4 py-2 outline-none hover:bg-[##2B2B2B]"
                    placeholder="Type your Price"
                  />
                </div>
              </div>

              <div className="w-full flex justify-end">
                <button
                  onClick={Submitform}
                  type="submit"
                  className="bg-blue-600 rounded-full text-white font-medium text-lg font-SpaceGrotesk px-4 py-2 w-full sm:w-max"
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
