import { useState } from 'react'
import { SideBar } from './assets/components/SideBar.jsx'
import { ScrollArea } from '@radix-ui/themes' 
import InputBar from './assets/components/InputBar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="flex flex-row h-screen w-screen">
  <div className="w-1/4 h-full">
    <ScrollArea type="always" scrollbars="vertical" style={{ height: '100vh' }}>
      <SideBar />
    </ScrollArea>
  </div>

  <div className="flex-1" style={{ position: "relative" }}>
    <InputBar />
  </div>
</div>


  )
}

export default App
