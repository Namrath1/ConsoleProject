import React, { useState } from "react";
import consoleContext from "./Context";

const ConsoleContextProvider = ({children}) => {
    const [value, setValue] = useState({ 
        startDate: new Date("01-01-2024"), 
        endDate: new Date().setMonth(11),
        }); 
    const [issubmitted, setissubmitted] = useState(false);
    const [isActivated, setisActivated] = useState(false);
    return(
        <consoleContext.Provider value={{value,setValue,issubmitted,setissubmitted,isActivated, setisActivated}}>
        {children}
        </consoleContext.Provider>
    )
}

export default ConsoleContextProvider