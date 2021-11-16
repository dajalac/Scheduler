import React, {useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Sidebar from './components/navbar/Sidebar';
import Home from './views/HomeView';
import ManageAppts from './views/ManageApptsView';
import NewClient from './views/NewClientView';
import SearchClientForAppt from './views/SearchClientForApptView';
import ProviderSchedule from './views/ProviderScheduleView'; 
import NewAppt from './views/NewApptView';
import AppointmentsHisotoryView from './views/AppointmentsHisotoryView';
import EditClient from './views/EditClient';


function App() {
  const[showSideBar, setShowSideBar ] = useState(false); 
  const {clients} = useSelector((state)=>state.clients);

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
          <Route path ='/newAppt' component={SearchClientForAppt}/>
          <Route path ='/ProviderSchedule' component={ProviderSchedule}/>
          {(clients) &&
            <div>
             <Route path ='/ManageAppts' component={ManageAppts}/>
             <Route path ='/ApptSchedule' component={NewAppt}/>
             <Route path ='/AppointmentsHistory' component={AppointmentsHisotoryView}/>
             <Route path ='/EditClient' component={EditClient}/>
             </div>
          }
          <Route component = {Home}/>
          </Switch>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
