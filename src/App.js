import "./App.css";
import Navbar from "./components/Navbar";
import Home from './Pages/Home';
import Login_page from './Pages/Login';
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom'
import { Login } from "@mui/icons-material";

function App(){
  return (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login_page />} />
      </Routes>
      
   </Router>
  </div>
  );
}
export default App;