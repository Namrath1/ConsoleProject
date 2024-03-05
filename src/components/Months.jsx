import React from 'react'
import MonthCard from './MonthCard';

function Months() {
  

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
    <section className="px-10 flex justify-center">
    <div className="flex space-x-3">
      {months.map((i) => {
        return <MonthCard month={i.month} monthnumber={i.monthnumber} key={i.monthnumber} />;
      })}
    </div>
  </section>
  )
}

export default Months