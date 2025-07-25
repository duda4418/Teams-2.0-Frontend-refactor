import { useState } from 'react'
import { SideBar } from './assets/components/SideBar.jsx'
import { ScrollArea } from '@radix-ui/themes' 
import InputBar from './assets/components/InputBar.jsx'
import './App.css'
import { NavBar } from './assets/components/NavBar.jsx'
import MessagesSection from './assets/components/MessagesSection.jsx'

function App() {
  return (
    <div className="flex flex-row h-screen w-screen ">
      <div className="w-1/4 h-full">
        <SideBar />
      </div>
      <div>
        <NavBar/>
      </div>
      <div>
        <MessagesSection/>
      </div>
      <div className="flex-1 " style={{ position: "relative" }}>
        <InputBar />
      </div>
    </div>
  )
}


export default App
