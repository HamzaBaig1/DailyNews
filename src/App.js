import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App() {

    const [mode,setMode]= useState("light")

   const toggleMode=()=>
   {
    if(mode==="light")
    {
      setMode("dark")
      document.body.style.backgroundColor="#0A2647"
      
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor="white"
      
    }
   }

   const [progress,setProgress]= useState(0)

  return (
    <BrowserRouter>
    <div>
      <LoadingBar color='#f11946' progress={progress} />

      <Navbar toggleMode={toggleMode} mode={mode}/> 
    <Routes>
      <Route exact path='/' element= {<News mode={mode} key={'General'} category={"General"} setProgress={setProgress} />} />
      <Route exact path='/General' element= {<News mode={mode} key={'General'} category={"General"} setProgress={setProgress} />} />
      <Route exact path='/Business' element= {<News mode={mode} key={'Business'} category={"Business"} setProgress={setProgress} />} />
      <Route exact path='/Entertainment' element= {<News mode={mode} key={'Entertainment'} category={"Entertainment"} setProgress={setProgress} />} />
      <Route exact path='/Health' element= {<News mode={mode} key={'Health'} category={"Health"} setProgress={setProgress} />} />
      <Route exact path='/Science' element= {<News mode={mode} key={'Science'} category={"Science"} setProgress={setProgress} />} />
      <Route exact path='/Sports' element= {<News mode={mode} key={'Sports'} category={"Sports"} setProgress={setProgress} />} />
      <Route exact path='/Technology' element= {<News mode={mode} key={'Technology'} category={"Technology"} setProgress={setProgress} />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App
