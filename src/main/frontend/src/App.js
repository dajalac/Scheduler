import React, {useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Sidebar from './components/navbar/Sidebar';

function App() {
  const[showSideBar, setShowSideBar ] = useState(false); 


  let displaySidebar = null
  const isMobile = useMediaQuery({ query: '(max-width: 650px)' })

  useEffect(()=>{
     if (!isMobile){
      setShowSideBar(false);
    }
  },[isMobile])

  if (isMobile && showSideBar){
    displaySidebar =<Sidebar />
  }
  else if (!isMobile){
    displaySidebar =<Sidebar /> 
  }


  return (
    <div className="App">
      <Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
      <div className="App-container">
        {displaySidebar}
        <div className="App-page-contaier">this is APP'</div>
      </div>
    </div>
  );
}

export default App;
