import Sidebar from './sidebar'
import Topbar from './topbar'
import Dashboard from './dashboard'

import './App.css';

function App() {
  return (
    <div id="wrapper">
      <Topbar></Topbar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
        <Sidebar></Sidebar>
        
        </div>
      </div>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
