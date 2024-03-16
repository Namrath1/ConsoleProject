
import { useContext } from 'react';
import MonthCard from './MonthCard';
import consoleContext from './Context/Context'


function Months() {
  
  const { issubmitted, value,setisActivated,isActivated } = useContext(consoleContext);

    let months = [
      {
        month:"JAN",
        monthName:"January",
        monthnumber:1,
      },
      {
        month:"FEB",
        monthName:"Febraury",
        monthnumber:2,
      },
      {
        month:"MAR",
        monthName:"March",
        monthnumber:3,
      },
      {
        month:"APR",
        monthName:"April",
        monthnumber:4,
      },
      {
        month:"MAY",
        monthName:"May",
        monthnumber:5,
      },
      {
        month:"JUN",
        monthName:"June",
        monthnumber:6,
      },
      {
        month:"JUL",
        monthName:"July",
        monthnumber:7,
      },
      {
        month:"AUG",
        monthName:"August",
        monthnumber:8,
      },
      {
        month:"SEP",
        monthName:"September",
        monthnumber:9,
      },
      {
        month:"OCT",
        monthName:"October",
        monthnumber:10,
      },
      {
        month:"NOV",
        monthName:"November",
        monthnumber:11,
      },
      {
        month:"DEC",
        monthName:"December",
        monthnumber:12,
      }
      ];
  return (
    <>
    
      {issubmitted ?  
      <section className="px-5 pt-5 pb-10 flex flex-col justify-center text-white bg-black ">
        <span className='text-2xl font-bold px-48 py-5'>2024</span>
      
      <div className="grid grid-cols-6 gap-6 w-[74%] py-5 mx-auto ">
        
      {months.map((i) => {
        return <MonthCard month={i.month} monthName={i.monthName} monthnumber={i.monthnumber} key={i.monthnumber} />;
      })}
    </div> </section>
    : <div className='space-y-5 py-20 flex flex-col items-center justify-center font-HedvigLettersSans'>
      <img className='w-52' src="https://console.zerodha.com/static/images/init.svg" alt="" />
      <span className='text-center text-blue-500  text-xl'>Build a report</span>
      <span className='text-center text-[#dbd9d9]'>Select the dates to generate a report</span>
      </div>}
   
  
  </>
  )
}

export default Months