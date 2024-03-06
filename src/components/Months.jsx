
import { useContext } from 'react';
import MonthCard from './MonthCard';
import consoleContext from './Context/Context';


function Months() {
  
  const { issubmitted, value,setisActivated,isActivated } = useContext(consoleContext);

    let months = [
      {
        month:"JAN",
        monthnumber:1,
      },
      {
        month:"FEB",
        monthnumber:2,
      },
      {
        month:"MAR",
        monthnumber:3,
      },
      {
        month:"APR",
        monthnumber:4,
      },
      {
        month:"MAY",
        monthnumber:5,
      },
      {
        month:"JUN",
        monthnumber:6,
      },
      {
        month:"JUL",
        monthnumber:7,
      },
      {
        month:"AUG",
        monthnumber:8,
      },
      {
        month:"SEP",
        monthnumber:9,
      },
      {
        month:"OCT",
        monthnumber:10,
      },
      {
        month:"NOV",
        monthnumber:11,
      },
      {
        month:"DEC",
        monthnumber:12,
      }
      ];
  return (
    <section className="px-10 flex justify-center ">
      {issubmitted ?  <div className="flex flex-wrap gap-7 justify-center">
      {months.map((i) => {
        return <MonthCard month={i.month} monthnumber={i.monthnumber} key={i.monthnumber} />;
      })}
    </div> : <p>Please Select the Date Range</p>}
   
  </section>
  )
}

export default Months