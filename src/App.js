import React  from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './Pages/Home'
import Login_page from './Pages/Login';
import Register_page from './Pages/Register';
import About_page from './Pages/About';
import Main_page from './Pages/main'
import Regist_success from './Pages/regist_complete'
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom'


function App(){
  return (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login_page />} />
        <Route exact path='/register' element={<Register_page />} />
        <Route exact path='/about' element={<About_page />} />
        <Route exact path='/main' element={<Main_page />} />
        <Route exact path='/regist_complete' element={<Regist_success />} />
      </Routes>
      
   </Router>
  </div>
  );
}
export default App;