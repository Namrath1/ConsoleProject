import React from 'react'
import { useContext } from "react"

import Hero from './Hero'
import Months from "./Months"
import Navbar from "./Navbar"
import Summary from "./Summary"
import consoleContext from "./Context/Context"
import TradesTable from "./TradesTable"

function AnnualReport() {
    
  return (
    <div className='bg-black min-h-screen'>
      <Navbar/>
      <Hero/>
      <Months/>
      <Summary/>
      <TradesTable/>
    </div>
  )
}

export default AnnualReport