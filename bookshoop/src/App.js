import {Route,Routes} from "react-router-dom"
import './App.css';
import Login from "./components/Login/Login";
import Admin from "./components/AdminDashboard/Admin";

function App() {
  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/admin" element={<Admin/>}/>
</Routes>
  
    </div>
  );
}

export default App;
