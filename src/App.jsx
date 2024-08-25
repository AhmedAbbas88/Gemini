import React from 'react'
import SideBar from './Components/SideBar/SideBar'
import Main from './Components/Main/Main'
import {Helmet} from "react-helmet";
import { createHashRouter } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gemini</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <SideBar/>
      <Main/>
    </>
  )
}

export default App