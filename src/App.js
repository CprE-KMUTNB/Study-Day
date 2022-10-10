import "./App.css";
import Navbar from "./components/Navbar";
import Home from './Pages/Home'
import Login_page from './Pages/Login';
import Register_page from './Pages/Register';
import About_page from './Pages/About';

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
      </Routes>
      
   </Router>
  </div>
  );
}
export default App;