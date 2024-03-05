import React, { useState } from "react";
import consoleContext from "./Context";

const ConsoleContextProvider = ({children}) => {
    const [date, setdate] = useState("");
    const [issubmitted, setissubmitted] = useState(false);
    return(
        <consoleContext.Provider value={{date,setdate,issubmitted,setissubmitted}}>
        {children}
        </consoleContext.Provider>
    )
}

export default ConsoleContextProvider