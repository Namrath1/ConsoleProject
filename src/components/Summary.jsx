import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import consoleContext from './Context/Context';


function Summary() {
  const [Profit, setProfit] = useState(0);
  const [textcolor, settextcolor] = useState("");
  const [symbol, setsymbol] = useState("");
  const [otherCharges, setotherCharges] = useState(0);
  const [charges, setcharges] = useState(0);
  const [net, setnet] = useState(0);
  const { issubmitted, value,setisActivated,isActivated } = useContext(consoleContext);
  console.log(isActivated);
  
  useEffect(() => {
   
    if(isActivated){
      axios.post("http://localhost:3000/getselected",{ isActivated:isActivated }).then((resp)=>{
      console.log(resp);
      setProfit(resp.data[0]?.Profit)
      console.log(Profit);
      setcharges(resp.data[0]?.Charges)
      setotherCharges(resp.data[0]?.STTCTT)
      setnet(resp.data[0]?.Profit-(resp.data[0]?.Charges+resp.data[0]?.STTCTT))
      
    })
   
        if (Profit>0) {
            settextcolor("#10b987")
            setsymbol("+")
        } else {
            setsymbol("")
            settextcolor("red")
        }
      
    }
  }, [isActivated,Profit]);
  

  return (

    <>
      {issubmitted ?<div className='flex bg-[#222121] w-[74%] mx-auto items-center py-10 justify-around my-10 text-[#dad7d7]'> <div className='flex flex-col space-y-2'>
        <label>Realised P&L</label>
        <span style={{color:textcolor}} className='text-2xl'>{symbol}{Profit}</span>
        </div>

        <div className='flex flex-col space-y-2'>
        <label>Charges & Taxes</label>
        <span className='text-2xl'>{charges}</span>
        </div>

        <div className='flex flex-col space-y-2'>
        <label>Other credits & debits</label>
        <span className='text-2xl'>{otherCharges}</span>
        </div>

        <div className='flex flex-col space-y-2'>
        <label>Net realised P&L</label>
        <span style={{color:textcolor}}  className='text-2xl'>{symbol}{net}</span>
        </div>

        <div className='flex flex-col space-y-2'>
        <label>Unrealised P&L</label>
        <span className='text-2xl'>+10.1K</span>
        </div> <div/>
        </div> : <p></p>}
       
    </>
  )
}

export default Summary