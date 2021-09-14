import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Sidebar from './components/navbar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="App-container">
        <Sidebar/>
        <div className="App-page-contaier">this is APP'</div>
      </div>
    </div>
  );
}

export default App;
