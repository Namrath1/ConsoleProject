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
    {issubmitted?<div className='my-20 font-HedvigLettersSans text-sm'>
        <table style={{width:"74%"}} className='mx-auto '>
  <tr className='border-2 '>
    <th className='border-b border-r  py-3 font-extralight text-left px-2 text-[#c1c2c1]'>Symbol</th>
    <th  className='border-2 py-3 font-extralight px-2 text-right text-[#c1c2c1]'>Date</th>
    <th  className='border-2 py-3 font-extralight text-right text-[#c1c2c1]'>Qty</th>
    <th  className='border-2 py-3 font-extralight text-right text-[#c1c2c1]'>Buy Amt</th>
    <th  className='border-2 py-3 font-extralight text-right text-[#c1c2c1]'>Sell Amt</th>
    <th  className='border-2 py-3 font-extralight text-right text-[#c1c2c1]'>Profit</th>
    <th className='border-2 py-3 font-extralight text-right text-[#c1c2c1]'>Unrealised P&L</th>
  </tr>
 {data.map((i)=>{ 
    
  return(<tr key={i.Date} className=' hover:bg-[#f4f5f6]' >
    <td className='text-left border-b   py-3 px-2'>{i.ScriptName}</td>
    <td className='text-right  py-3 px-2'>{i.Date}</td>
    <td className='text-right border py-3 px-2'>{i.Qty}</td>
    <td className='text-right border py-3 px-2'>{i.BuyAmt}</td>
    <td className='text-right border py-3 px-2'>{i.SellAmt}</td>
    <td className='text-right border py-3 px-2' style={i.Profit>0?{color:"green"}:{color:"red"}}>{i.Profit}</td>
    <td className='text-right border-l border-b py-3 px-2'>-</td>
    
  </tr>  )
 })}
</table>
    </div>:<p></p>}
    
    </>
    
  )
}

export default TradesTable