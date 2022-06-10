import logo from './logo.svg';
import './App.css';
import Navbar from './pages/shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Footer from './pages/shared/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='home' element={<Homepage />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
