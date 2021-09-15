import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Sidebar from './components/navbar/Sidebar';
import Home from './screens/Home';
import ClientInfo from './screens/ClientInfo';
import NewClient from './screens/NewClient';
import NewAppt from './screens/NewAppt';
import ProviderSchedule from './screens/ProviderSchedule'; 


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
      <Router>
      <Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
      <div className="App-container">
        {displaySidebar}
        <div className="App-page-contaier">
          <Switch>
          <Route exact path ='/' component={Home}/>
          <Route path ='/newClient' component={NewClient}/>
          <Route path ='/clientInfo' component={ClientInfo}/>
          <Route path ='/newAppt' component={NewAppt}/>
          <Route path ='/ProviderSchedule' component={ProviderSchedule}/>
          <Route component = {Home}/>
          </Switch>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
