import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import consoleContext from "./Context/Context";
function MonthCard(props) {
  let arr = [];
  let arr2 = [];

  const [data, setdata] = useState([]);
  const { issubmitted, value,setisActivated,isActivated } = useContext(consoleContext);
  useEffect(() => {
    axios
      .get("http://localhost:3000/getreport")
      .then((resp) => {
        console.log(resp);
        setdata(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(value);

 
  if (
    props.month === "JAN" ||
    props.month === "MAR" ||
    props.month === "MAY" ||
    props.month === "JUL" ||
    props.month === "AUG" ||
    props.month === "OCT" ||
    props.month === "DEC"
  ) {
    if (!issubmitted) {
      for (let i = 0; i < data.length; i++) {
        if (parseInt(data[i]?.Date.slice(3, 5)) === props.monthnumber) {
          arr2.push(data[i]);
        }
      }
    } else {
      if (value.startDate.slice(5,7) === value.endDate.slice(5,7)) {
        for (let i = 0; i < data.length; i++) {
          if (
            parseInt(data[i]?.Date.slice(0, 2)) >=
              parseInt(value.startDate.slice(8, 10)) &&
            parseInt(data[i]?.Date.slice(0, 2)) <=
              parseInt(value.endDate.slice(8, 10))
          ) {
            if (parseInt(data[i]?.Date.slice(3, 5)) === props.monthnumber && props.monthnumber===parseInt(value.startDate.slice(5,7))) {
              arr2.push(data[i]);
             
            }
          }
        }
      }
      else{
        for (let i = 0; i < data.length; i++) {
            if (parseInt(data[i]?.Date.slice(3,5))*100+parseInt(data[i]?.Date.slice(0,2))>=parseInt(value.startDate.slice(5,7))*100+parseInt(value.startDate.slice(8,10))&&parseInt(data[i]?.Date.slice(3,5))*100+parseInt(data[i]?.Date.slice(0,2))<=parseInt(value.endDate.slice(5,7))*100+parseInt(value.endDate.slice(8,10))) {
              if (parseInt(data[i]?.Date.slice(3, 5)) === props.monthnumber && props.monthnumber>=parseInt(value.startDate.slice(5,7))&&props.monthnumber<=parseInt(value.endDate.slice(5,7))) {
                arr2.push(data[i]);
               
              }
            }
            
        }
      }
    }
    arr2.sort((a, b) => {
      const dateA = a.Date;
      const dateB = b.Date;

      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    });
    console.log(arr2, "arr2");

    for (let i = 1, j = 0; i <= 31; i++) {
      if (arr2[j]?.Profit > 0 && parseInt(arr2[j]?.Date.slice(0, 2)) === i) {
        arr.push(
          <div
            className="bg-green-600 h-[15px] w-[15px] cursor-pointer hover:border-[1px] border-black"
            key={i}
          ></div>
        );
        j++;
      } else if (
        arr2[j]?.Profit < 0 &&
        parseInt(arr2[j]?.Date.slice(0, 2)) === i
      ) {
        arr.push(
          <div
            className="bg-red-600 h-[15px] w-[15px] cursor-pointer hover:border-[1px] border-black"
            key={i}
          ></div>
        );
        j++;
      } else
        arr.push(
          <div
            className="bg-[#f4f4f4] h-[15px] w-[15px] cursor-pointer hover:border-[1px] border-black"
            key={i}
          ></div>
        );
    }
  } else if (
    props.month === "APR" ||
    props.month === "JUN" ||
    props.month === "SEP" ||
    props.month === "NOV"
  ) {
    if (!issubmitted) {
      for (let i = 0; i < data.length; i++) {
        if (parseInt(data[i]?.Date.slice(3, 5)) === props.monthnumber) {
          arr2.push(data[i]);
        }
      }
    } else {
      if (value.startDate.slice(5,7) === value.endDate.slice(5,7)) {
        for (let i = 0; i < data.length; i++) {
          if (
            parseInt(data[i]?.Date.slice(0, 2)) >=
              parseInt(value.startDate.slice(8, 10)) &&
            parseInt(data[i]?.Date.slice(0, 2)) <=
              parseInt(value.endDate.slice(8, 10))
          ) {
            if (parseInt(data[i]?.Date.slice(3, 5)) === props.monthnumber && props.monthnumber===parseInt(value.startDate.slice(5,7))) {
              arr2.push(data[i]);
             
            }
          }
        }
      }
      else{
        for (let i = 0; i < data.length; i++) {
            if (parseInt(data[i]?.Date.slice(3,5))*100+parseInt(data[i]?.Date.slice(0,2))>=parseInt(value.startDate.slice(5,7))*100+parseInt(value.startDate.slice(8,10))&&parseInt(data[i]?.Date.slice(3,5))*100+parseInt(data[i]?.Date.slice(0,2))<=parseInt(value.endDate.slice(5,7))*100+parseInt(value.endDate.slice(8,10))) {
              if (parseInt(data[i]?.Date.slice(3, 5)) === props.monthnumber && props.monthnumber>=parseInt(value.startDate.slice(5,7))&&props.monthnumber<=parseInt(value.endDate.slice(5,7))) {
                arr2.push(data[i]);
               
              }

            }
            
        }
      }
    }
    arr2.sort((a, b) => {
      const dateA = a.Date;
      const dateB = b.Date;

      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    });
    console.log(arr2, "arr2");

    for (let i = 1, j = 0; i <= 30; i++) {
      if (arr2[j]?.Profit > 0 && parseInt(arr2[j]?.Date.slice(0, 2)) === i) {
        arr.push(
          <div
          onClick={()=>{setisActivated(true)}}
            className="bg-green-600 h-[15px] w-[15px] cursor-pointer hover:border-[1px] border-black"
            key={i}
          ></div>
        );
        j++;
      } else if (
        arr2[j]?.Profit < 0 &&
        parseInt(arr2[j]?.Date.slice(0, 2)) === i
      ) {
        arr.push(
          <div
          onClick={()=>{setisActivated(true)}}
            className="bg-red-600 h-[15px] w-[15px] cursor-pointer hover:border-[1px] border-black"
            key={i}
          ></div>
        );
        j++;
      } else
        arr.push(
          <div
          onClick={()=>{setisActivated(true)}}
            className="bg-[#f4f4f4] h-[15px] w-[15px] cursor-pointer hover:border-[1px] border-black"
            key={i}
          ></div>
        );
    }
  } else {
    if (!issubmitted) {
        for (let i = 0; i < data.length; i++) {
          if (parseInt(data[i]?.Date.slice(3, 5)) === props.monthnumber) {
            arr2.push(data[i]);
          }
        }
      } else {
        if (value.startDate.slice(5,7) === value.endDate.slice(5,7)) {
          for (let i = 0; i < data.length; i++) {
            if (
              parseInt(data[i]?.Date.slice(0, 2)) >=
                parseInt(value.startDate.slice(8, 10)) &&
              parseInt(data[i]?.Date.slice(0, 2)) <=
                parseInt(value.endDate.slice(8, 10))
            ) {
              if (parseInt(data[i]?.Date.slice(3, 5)) === props.monthnumber && props.monthnumber===parseInt(value.startDate.slice(5,7))) {
                arr2.push(data[i]);
               
              }
            }
          }
        }
        else{
          for (let i = 0; i < data.length; i++) {
              if (parseInt(data[i]?.Date.slice(3,5))*100+parseInt(data[i]?.Date.slice(0,2))>=parseInt(value.startDate.slice(5,7))*100+parseInt(value.startDate.slice(8,10))&&parseInt(data[i]?.Date.slice(3,5))*100+parseInt(data[i]?.Date.slice(0,2))<=parseInt(value.endDate.slice(5,7))*100+parseInt(value.endDate.slice(8,10))) {
                if (parseInt(data[i]?.Date.slice(3, 5)) === props.monthnumber && props.monthnumber>=parseInt(value.startDate.slice(5,7))&&props.monthnumber<=parseInt(value.endDate.slice(5,7))) {
                  arr2.push(data[i]);
                 
                }
              }
              
          }
        }
      }
    for (let i = 1, j = 0; i <= 28; i++) {
      if (arr2[j]?.Profit > 0 && parseInt(arr2[j]?.Date.slice(0, 2)) === i) {
        arr.push(
          <div
          onClick={()=>{setisActivated(true)}}
            className="bg-green-600 h-[15px] w-[15px] cursor-pointer hover:border-[1px] border-black"
            key={i}
          ></div>
        );
        j++;
      } else if (
        arr2[j]?.Profit < 0 &&
        parseInt(arr2[j]?.Date.slice(0, 2)) === i
      ) {
        arr.push(
          <div
          onClick={()=>{setisActivated(true)}}
            className="bg-red-600 h-[15px] w-[15px] cursor-pointer hover:border-[1px] border-black"
            key={i}
          ></div>
        );
        j++;
      } else
        arr.push(
          <div
            onClick={()=>{setisActivated(true)}}
            className="bg-[#f4f4f4] h-[15px] w-[15px] cursor-pointer hover:border-[1px] border-black"
            key={i}
          ></div>
        );
    }
  }

  return (
    <div className="flex flex-col font-HedvigLettersSans">
      <span className="py-2 text-sm font-extralight">{props.month}</span>
      <div className="grid grid-cols-5 gap-1 w-[5.2rem] mb-3">{arr}</div>
    </div>
  );
}

export default MonthCard;
