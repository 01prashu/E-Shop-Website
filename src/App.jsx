import React from "react"
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
initMDB({ Dropdown, Collapse });
import Home from "./screens/Home";

function App() {
  
  return (
    <>
      <div>
        <Home/>
        
    </div>
</>
  )
}

export default App
