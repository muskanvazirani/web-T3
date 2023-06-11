import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path = "/home" element = {<Home />}></Route>
      </Routes>  
    </div>
  );
}

export default App;
