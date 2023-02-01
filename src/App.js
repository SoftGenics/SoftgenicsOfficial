
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ApplicationLife from "./Components/ApplicationLife/Applicationlife";
import Itservise from "./Components/Itservise/Itservise";
import Home from './Components/Pages/Home';
import Business from './Components/Business/Business';
import DataManagement from './Components/DataManagement/DataManagement';
import Marketing from './Components/Marketing/Marketing';
import WorkManagement from './Components/Workmangement/Workmanagement';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path="/Applicationlife" element={<ApplicationLife />} />
       <Route path="/Itservise" element={<Itservise/>} />
       <Route path="/Business" element={<Business/>} />
       <Route path="/DataManagement" element={<DataManagement/>} />
       <Route path="/Marketing" element={<Marketing/>} />
       <Route path="/WorkManagement" element={<WorkManagement/>} />


     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
