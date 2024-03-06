import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import consoleContext from './Context/Context';

function Summary() {
  const [Profit, setProfit] = useState(0);
  const [textcolor, settextcolor] = useState("");
  const [symbol, setsymbol] = useState("");
  const [charges, setcharges] = useState(0);
  const [net, setnet] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:3000/getsummary").then((resp)=>{
       
      setProfit(resp.data.sum)
      setcharges(resp.data.charges);
      setnet(resp.data.net)
    })
}, []);
function color(){
    if (Profit>0) {
 settextcolor("#10b987")
 setsymbol("+")
} else {
 settextcolor("red")

}}
const { issubmitted, value,setisActivated,isActivated } = useContext(consoleContext);
  return (

    <div onMouseOver={color} className='flex bg-[#f4f4f4] w-[74%] mx-auto items-center py-10 justify-around my-10'>
      {issubmitted ? <> <div className='flex flex-col space-y-2'>
        <label>Realised P&L</label>
        <span style={{color:textcolor}} className='text-2xl'>{symbol}{Profit}</span>
        </div>

        <div className='flex flex-col space-y-2'>
        <label>Charges & Taxes</label>
        <span className='text-2xl'>{charges}</span>
        </div>

        <div className='flex flex-col space-y-2'>
        <label>Other credits & debits</label>
        <span className='text-2xl'>+10.1K</span>
        </div>

        <div className='flex flex-col space-y-2'>
        <label>Net realised P&L</label>
        <span style={{color:textcolor}}  className='text-2xl'>{symbol}{net}</span>
        </div>

        <div className='flex flex-col space-y-2'>
        <label>Unrealised P&L</label>
        <span className='text-2xl'>+10.1K</span>
        </div> </> : <p></p>}
       
    </div>
  )
}

export default Summary