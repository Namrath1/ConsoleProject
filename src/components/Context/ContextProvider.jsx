import React, { useState } from "react";
import consoleContext from "./Context";

const ConsoleContextProvider = ({children}) => {
    const [value, setValue] = useState({ 
        startDate: "01-01-2024", 
        endDate: "31-12-2024"
        }); 
    const [issubmitted, setissubmitted] = useState(false);
    const [isActivated, setisActivated] = useState("");
    return(
        <consoleContext.Provider value={{value,setValue,issubmitted,setissubmitted,isActivated, setisActivated}}>
        {children}
        </consoleContext.Provider>
    )
}

export default ConsoleContextProvider