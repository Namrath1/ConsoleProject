import ConsoleContextProvider from "./components/Context/ContextProvider"
import Hero from "./components/Hero"
import Months from "./components/Months"
import Navbar from "./components/Navbar"
import Summary from "./components/Summary"


function App() {


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
