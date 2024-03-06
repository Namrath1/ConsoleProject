import { useContext } from "react"
import ConsoleContextProvider from "./components/Context/ContextProvider"
import Hero from "./components/Hero"
import Months from "./components/Months"
import Navbar from "./components/Navbar"
import Summary from "./components/Summary"
import consoleContext from "./components/Context/Context"


function App() {
  const { value,setValue,issubmitted,setissubmitted } = useContext(consoleContext)

  return (
    
    <ConsoleContextProvider>
      

      <Navbar/>
      <Hero/>
      <Months/>
      <Summary/>
     
      
      
    </ConsoleContextProvider>
  )
}

export default App
