import logo from './logo.svg';
import './App.css';
import Navbar from './pages/shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='home' element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
