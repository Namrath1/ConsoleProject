import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import consoleContext from './Context/Context';
function TradesTable() {
   
    const { issubmitted, value,setisActivated,isActivated } = useContext(consoleContext);
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/getdata").then((resp)=>{setdata(resp.data)}).catch((err)=>console.log(err))
    }, []);

  return (
    <>
    
    {issubmitted?<div className='py-20 font-SpaceGrotesk text-sm text-[#c1c2c1] bg-black'>
    <h1 className='text-3xl px-48 mb-4 text-white'>Trade History</h1>
        <table style={{width:"74%"}} className='mx-auto '>
  <tr className='border-2 border-[#353434]'>
    <th className='border-b border-r border-[#353434]  py-3 font-extralight text-left px-2 '>Symbol</th>
    <th  className='border-2 border-[#353434] py-3 font-extralight px-2 text-right'>Date</th>
    <th  className='border-2 border-[#353434] py-3 font-extralight text-right px-2 '>Qty</th>
    <th  className='border-2 border-[#353434] py-3 font-extralight text-right px-2'>Buy Amt</th>
    <th  className='border-2 border-[#353434] py-3 font-extralight text-right px-2'>Sell Amt</th>
    <th  className='border-2 border-[#353434] py-3 font-extralight text-right px-2'>Profit</th>
    <th className='border-2 border-[#353434] py-3 font-extralight text-right px-2'>Unrealised P&L</th>
  </tr>
 {data.map((i)=>{ 
    
  return(<tr key={i.Date} className=' hover:bg-[#222121]' >
    <td className='text-left border-[#353434] border-b py-3 px-2'>{i.ScriptName}</td>
    <td className='text-right border-[#353434] border py-3 px-2'>{i.Date?i.Date:"-"}</td>
    <td className='text-right border-[#353434] border py-3 px-2'>{i.Qty?i.Qty:"-"}</td>
    <td className='text-right border-[#353434] border py-3 px-2'>{i.BuyAmt?i.BuyAmt:"-"}</td>
    <td className='text-right border-[#353434] border py-3 px-2'>{i.SellAmt?i.SellAmt:"-"}</td>
    <td className='text-right border-[#353434] border py-3 px-2' style={i.Profit>0?{color:"green"}:{color:"red"}}>{i.Profit}</td>
    <td className='text-right border-[#353434] border-l border-b py-3 px-2'>-</td>
    
  </tr>  )
 })}
</table>
    </div>:<p></p>}
    
    </>
    
  )
}

export default TradesTable